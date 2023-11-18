import { Elysia } from 'elysia'
import { SWC } from './core'

export function SWCRouter<Ctx extends Elysia>(ctx: Ctx): Ctx {
	SWC.routes.forEach((route) => {
		ctx[route.httpVerb](
			`/api/swc/${route.componentTag}/${route.action}`,
			async (ctx) =>
				new Response(null, {
					headers: {
						'HX-Trigger': JSON.stringify(
							Object.fromEntries([
								[`${route.action}:res`, { v: await route.res(ctx) }]
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
			},
		)
	})

	return ctx
}
