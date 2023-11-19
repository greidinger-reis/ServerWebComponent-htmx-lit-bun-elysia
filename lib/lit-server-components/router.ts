import { Context as RequestContext, Elysia } from 'elysia'
import { SWC } from './core'
import { SWCKind } from '.';

export type SWCRouterOptions = {
	prefix: string;
}

export function SWCRouter<Context extends Elysia>(ctx: Context, swcOpts: SWCRouterOptions = { prefix: '/api/swc' }): Context {
	for (const [componentTag, routes] of SWC.map.entries()) {
		for (const route of routes) {
			if (!route.res) {
				throw new Error(`No res function for ${componentTag}:${route.action}`)
			}
			const routePath = `${swcOpts.prefix}/${componentTag}/${route.action}`
			const handler = async (ctx: RequestContext) =>
				new Response(null, {
					headers: {
						'HX-Trigger': JSON.stringify(
							Object.fromEntries([
								[`${componentTag}:${route.action}:res`, { v: await route.res!(ctx) }]
							]),
						),
					},
				})

			const opts = {
				beforeHandle: ({ set, request: { headers } }: any) => {
					if (!headers.has('hx-request')) {
						set.status = 'Bad Request'
						return
					}
				},
			}

			if (route.kind === SWCKind.Action) {
				ctx.post(routePath, handler, opts)
			} else if (route.kind === SWCKind.Loader) {
				ctx.get(routePath, handler, opts)
			}
		}
	}

	return ctx
}
