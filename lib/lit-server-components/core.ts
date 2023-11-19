import type { Context } from 'elysia'
import {
	type ComponentTag,
	type ServerComponentRoute,
	SWCKind,
} from './types'
import { isServer } from 'lit'
import { getPathFromLastInCallStack } from './util'

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
export function loader(args?: { bind: string }) {
	return function(target: any, action: string) {
		const componentTag = `x-${target.constructor.name.toLowerCase()}`
		const route: ServerComponentRoute = {
			kind: SWCKind.Loader,
			action,
		}
		if (!SWC.map.has(componentTag)) {
			SWC.map.set(componentTag, new Set([route]))
		}

		if (isServer) {
			const filePath = getPathFromLastInCallStack()!
			const serverPath = filePath.replace('.ts', '.server.ts')
			route.res = async (ctx: Context) => {
				const mod = await import(serverPath)
				return mod[action](ctx)
			}

			SWC.map.set(componentTag, SWC.map.get(componentTag)!.add(route))
			return
		}

		const element = document.querySelector(componentTag)
		if (!element) throw Error('FATAL: Could not find element with tag name: ' + componentTag)

		SWC.map.get(componentTag)?.forEach(
			(route) => {
				//@ts-ignore
				element[action] = (parameters: { [key: string]: any }) => SWC.send(action, { detail: { parameters } })
				const httpVerb = route.kind === SWCKind.Action ? 'post' : 'get'

				element.setAttribute('hx-trigger', `${action} from:body`)
				element.setAttribute(`hx-${httpVerb}`, `${SWC.basePath}/${componentTag}/${action}`)
				element.setAttribute('hx-swap', 'none')
				// console.log({httpVerb, route, element, action })

				if (args) {
					document.body.addEventListener(`${componentTag}:${action}:res`, ({ detail: { v } }: CustomEventInit) => {
						element.setAttribute(args.bind, typeof v === 'object' ? JSON.stringify(v) : v)
					})
				}
			},
		)
	}
}

//FIXME: Find a better way to pass the component's path
export function action(args?: { bind: string }) {
	return function(target: any, action: string) {
		const componentTag = `x-${target.constructor.name.toLowerCase()}`
		const route: ServerComponentRoute = {
			kind: SWCKind.Action,
			action,
		}
		if (!SWC.map.has(componentTag)) {
			SWC.map.set(componentTag, new Set([route]))
		}

		if (isServer) {
			const filePath = getPathFromLastInCallStack()!
			console.log(filePath)
			const serverPath = filePath.replace('.ts', '.server.ts')
			console.log(serverPath)
			route.res = async (ctx: Context) => {
				const mod = await import(serverPath)
				return mod[action](ctx)
			}

			SWC.map.set(componentTag, SWC.map.get(componentTag)!.add(route))
			return
		}

		const element = document.querySelector(componentTag)
		if (!element) throw Error('FATAL: Could not find element with tag name: ' + componentTag)

		SWC.map.get(componentTag)?.forEach(
			(route) => {
				//@ts-ignore
				element[action] = (parameters: { [key: string]: any }) => SWC.send(action, { detail: { parameters } })
				const httpVerb = route.kind === SWCKind.Action ? 'post' : 'get'

				element.setAttribute('hx-trigger', `${action} from:body`)
				element.setAttribute(`hx-${httpVerb}`, `${SWC.basePath}/${componentTag}/${action}`)
				element.setAttribute('hx-swap', 'none')

				if (args) {
					document.body.addEventListener(`${componentTag}:${action}:res`, ({ detail: { v } }: CustomEventInit) => {
						element.setAttribute(args.bind, typeof v === 'object' ? JSON.stringify(v) : v)
					})
				}
			},
		)
	}
}
