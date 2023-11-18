import type { Context } from 'elysia'
import type {
	HTTPVerb,
	WiredEvent,
	WiredProperty,
	ComponentTag,
	ServerComponentRoute,
	ServerAction,
	GenericConstructor,
	CustomElementClass,
} from './types'
import { isServer } from 'lit'
import { LitElement } from 'lit'

//Maybe this should be a class
export namespace SWC {
	export const map: Map<ComponentTag, Map<ServerAction, [HTTPVerb, WiredEvent, WiredProperty]>> = new Map()
	export const routes: Set<ServerComponentRoute> = new Set() 
	export function send(type: string, eventInitDict?: CustomEventInit | undefined) {
		document.body.dispatchEvent(new CustomEvent(type, eventInitDict))
	}
	//TODO: Improve this. Maybe this needs to be part of the [HTTPVerb,WiredEvent,WiredPropery] class
	export function getComponentTagName(constructorName: string) {
		return Array.from(constructorName)
			.map((c, i) => (/[A-Z]/g.test(c) && i !== 0 ? `-${c.toLowerCase()}` : c.toLowerCase()))
		.join('')
	}
}

export const serverElement =
	(componentTag: ComponentTag, serverActions: Array<ServerAction>) => (proto: CustomElementClass) => {
		// This sets up the entry of this component on the SWCMap
		serverActions.forEach((serverAction: ServerAction) => {
			if (!SWC.map.has(componentTag))
				SWC.map.set(
					componentTag,
					//TODO: Improve this interface to avoid as cast. maybe wrap this in a class
					new Map([[serverAction, [...serverAction.split(':')] as [HTTPVerb, WiredEvent, WiredProperty]]]),
				)
			else
				//TODO: Improve this interface to avoid as cast. maybe wrap this in a class
				SWC.map.get(componentTag)!.set(serverAction, [...serverAction.split(':')] as [
					HTTPVerb,
					WiredEvent,
					WiredProperty,
				])
		})

		// This sets up the entry of this component on the SWCRoutes
		if (isServer) {
			SWC.map.get(componentTag)?.forEach(([httpVerb, action]) => {
				SWC.routes.add({
					httpVerb,
					componentTag,
					action,
					res: async (ctx: Context) => {
						//TODO: Avoid the hard coded path
						const mod = await import(`../../components/${componentTag}/${componentTag}.server.ts`)
						return mod[action](ctx)
					},
				})
			})
		}
		// This registers the component on the browser
		customElements.define(componentTag, proto as CustomElementConstructor)
	}

export const LitServerElement = <T>(genericConstructor: GenericConstructor<LitElement>): GenericConstructor<T & LitElement> => {
	const anon = class extends genericConstructor {
		constructor() {
			super()
			if (!isServer) {
				//Get the component tag-name
				const _COMPONENT_TAG_ = SWC.getComponentTagName(this.constructor.name)
				SWC.map.get(_COMPONENT_TAG_)?.forEach(
					([httpVerb, action, prop]: [HTTPVerb, WiredEvent, WiredProperty]) => {
						//@ts-ignore
						this[action] = (parameters: { [key: string]: any }) => SWC.send(action, { detail: { parameters } })
						this.setAttribute('hx-trigger', `${action} from:body`)
						this.setAttribute(`hx-${httpVerb}`, `/api/swc/${_COMPONENT_TAG_}/${action}`)
						this.setAttribute('hx-swap', 'none')
						document.body.addEventListener(`${action}:res`, ({ detail: { v } }: CustomEventInit) => {
							this.setAttribute(prop, typeof v === 'object' ? JSON.stringify(v) : v)
						})
					},
				)
			}
		}
	}
	return anon as GenericConstructor<T & LitElement>
}

//TODO: This should be improved, maybe automatic inference of server props
// Maybe this can be done with a decorator.
export function getServerProps<T>(ctx: Context): T {
	return JSON.parse(ctx.headers['swc-params']!) as T
}
