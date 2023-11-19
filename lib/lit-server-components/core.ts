import type { Context } from 'elysia'
import {
	type ComponentTag,
	type ServerComponentRoute,
	SWCKind,
} from './types'
import { isServer } from 'lit'

export namespace SWC {
	export let basePath = '/api/swc'

	export const map: Map<ComponentTag, Set<ServerComponentRoute>> = new Map()
	export function send(type: string, eventInitDict?: CustomEventInit | undefined) {
		document.body.dispatchEvent(new CustomEvent(type, eventInitDict))
	}
}

//TODO: This should be improved, maybe automatic inference of server props
// Maybe this can be done with a decorator.
export function getServerProps<T>(ctx: Context): T {
	return JSON.parse(ctx.headers['swc-params']!) as T
}

//FIXME: Find a better way to pass the component's path
export function loader({ bind, path }: { bind?: string, path: string }) {
	return function(target: any, action: string) {
		const componentTag = target.constructor.name
		const route: ServerComponentRoute = {
			kind: SWCKind.Loader,
			action,
		}
		if (!SWC.map.has(componentTag)) {
			SWC.map.set(componentTag, new Set([route]))
		}

		if (isServer) {
			const filename = path.split('/').pop()!.replace('.ts', '')!
			const serverFilename = filename.replace('.ts', '.server.ts')
			route.res = async (ctx: Context) => {
				const mod = await import(serverFilename)
				return mod[action](ctx)
			}

			SWC.map.set(componentTag, SWC.map.get(componentTag)!.add(route))
			return
		}

		SWC.map.get(componentTag)?.forEach(
			(route) => {
				target[action] = (parameters: { [key: string]: any }) => SWC.send(action, { detail: { parameters } })
				const httpVerb = route.kind === SWCKind.Loader ? 'get' : 'post'
				console.log({route, target, action })

				target.setAttribute('hx-trigger', `${action} from:body`)
				target.setAttribute(`hx-${httpVerb}`, `${SWC.basePath}/${componentTag}/${action}`)
				target.setAttribute('hx-swap', 'none')

				if (bind) {
					document.body.addEventListener(`${componentTag}:${action}:res`, ({ detail: { v } }: CustomEventInit) => {
						target.setAttribute(bind, typeof v === 'object' ? JSON.stringify(v) : v)
					})
				}
			},
		)
	}
}

//FIXME: Find a better way to pass the component's path
export function action({ bind, path }: { bind?: string, path: string }) {
	return function(target: any, action: string) {
		const componentTag = target.constructor.name
		const route: ServerComponentRoute = {
			kind: SWCKind.Action,
			action,
		}
		if (!SWC.map.has(componentTag)) {
			SWC.map.set(componentTag, new Set([route]))
		}

		if (isServer) {
			const filename = path.split('/').pop()!.replace('.ts', '')!
			const serverFilename = filename.replace('.ts', '.server.ts')
			route.res = async (ctx: Context) => {
				const mod = await import(serverFilename)
				return mod[action](ctx)
			}

			SWC.map.set(componentTag, SWC.map.get(componentTag)!.add(route))
			return
		}

		SWC.map.get(componentTag)?.forEach(
			(route) => {
				console.log({route})
				target[action] = (parameters: { [key: string]: any }) => SWC.send(action, { detail: { parameters } })
				const httpVerb = route.kind === SWCKind.Loader ? 'get' : 'post'

				target.setAttribute('hx-trigger', `${action} from:body`)
				target.setAttribute(`hx-${httpVerb}`, `${SWC.basePath}/${componentTag}/${action}`)
				target.setAttribute('hx-swap', 'none')
				console.log({ target, action, attributes: target.attributes })

				if (bind) {
					document.body.addEventListener(`${componentTag}:${action}:res`, ({ detail: { v } }: CustomEventInit) => {
						target.setAttribute(bind, typeof v === 'object' ? JSON.stringify(v) : v)
					})
				}
			},
		)
	}
}
