import { Elysia } from 'elysia'
import { SWC } from './core'
import { SWCKind } from '.';


/**
 * @description SWCRouterOptions is the options for the SWCRouter
 * @field basePath the base path for the router. Default: '/api/swc/'
 */
export type SWCRouterOptions = {
	basePath: string;
}

export function SWCRouter<Ctx extends Elysia>(ctx: Ctx, opts: SWCRouterOptions = { basePath: '/api/swc' }): Ctx {
	for (const [componentTag, routes] of SWC.map.entries()) {
		for (const route of routes) {
			const routePath = `${opts.basePath}/${route.component}/${route.action}`
			const handler = async (ctx: Ctx) =>
				new Response(null, {
					headers: {
						'HX-Trigger': JSON.stringify(
							Object.fromEntries([
								[`${route.component}:${route.action}:res`, { v: await route.res(ctx) }]
							]),
						),
					},
				}),
				{
					beforeHandle: ({ set, request: { headers } }) => {
						if (!headers.has('hx-request')) {
							set.status = 'Bad Request'
							return
						}
					},
				}

		if (route.kind === SWCKind.Action) {
			ctx.post(routePath, handler)
		} else if (route.kind === SWCKind.Loader) {
			ctx.get(routePath, handler)
		}
	}
}
})

return ctx
}
