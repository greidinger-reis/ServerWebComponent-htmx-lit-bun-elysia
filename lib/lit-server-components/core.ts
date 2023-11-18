import type { Context } from 'elysia'
import {
	type ComponentTag,
	type ServerComponentRoute,
	SWCKind,
} from './types'
import { isServer } from 'lit'

//Maybe this should be a class
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

export function loader({ bind, path }: { bind?: string, path: string }) {
	return function(target: any, action: string) {
		const componentName = path.split('/').pop()!.replace('.ts', '')!
		if (isServer) {
			const componentServerPath = path.replace('.ts', '.server.ts')
			const existingRoutes = SWC.map.get(componentName)
			const route: ServerComponentRoute = {
				kind: SWCKind.Loader,
				action,
				component: componentName,
				res: async (ctx: Context, bind) => {
					const mod = await import(componentServerPath)
					return mod[action](ctx, bind)
				}
			}

			SWC.map.set(componentName, existingRoutes ? existingRoutes.add(route) : new Set([route]))
			return
		}

		SWC.map.get(componentName)?.forEach(
			(route) => {
				target[action] = (parameters: { [key: string]: any }) => SWC.send(action, { detail: { parameters } })
				const httpVerb = route.kind === SWCKind.Loader ? 'get' : 'post'

				target.setAttribute('hx-trigger', `${action} from:body`)
				target.setAttribute(`hx-${httpVerb}`, `${SWC.basePath}/${componentName}/${action}`)
				target.setAttribute('hx-swap', 'none')

				if (bind) {
					document.body.addEventListener(`${componentName}:${action}:res`, ({ detail: { v } }: CustomEventInit) => {
						target.setAttribute(bind, typeof v === 'object' ? JSON.stringify(v) : v)
					})
				}
			},
		)
	}
}

export function action({ bind, path }: { bind: string, path: string }) {
	return function(target: any, action: string) {
		const componentName = path.split('/').pop()!.replace('.ts', '')!
		if (isServer) {
			const componentServerPath = path.replace('.ts', '.server.ts')
			const existingRoutes = SWC.map.get(componentName)
			const route: ServerComponentRoute = {
				kind: SWCKind.Action,
				action,
				component: componentName,
				res: async (ctx: Context, bind) => {
					const mod = await import(componentServerPath)
					return mod[action](ctx)
				}
			}

			SWC.map.set(componentName, existingRoutes ? existingRoutes.add(route) : new Set([route]))
			return
		}

		SWC.map.get(componentName)?.forEach(
			(route) => {
				target[action] = (parameters: { [key: string]: any }) => SWC.send(action, { detail: { parameters } })
				const httpVerb = route.kind === SWCKind.Loader ? 'get' : 'post'

				target.setAttribute('hx-trigger', `${action} from:body`)
				target.setAttribute(`hx-${httpVerb}`, `${SWC.basePath}/${componentName}/${action}`)
				target.setAttribute('hx-swap', 'none')

				if (bind) {
					document.body.addEventListener(`${componentName}:${action}:res`, ({ detail: { v } }: CustomEventInit) => {
						target.setAttribute(bind, typeof v === 'object' ? JSON.stringify(v) : v)
					})
				}
			},
		)
	}
}
