import Elysia from 'elysia'
import { Database } from 'bun:sqlite'
import { collectResult } from '@lit-labs/ssr/lib/render-result'
import { render } from '@lit-labs/ssr'
import { HTMLTemplateResult } from 'lit'

const db = new Database('database.sqlite')
db.exec("CREATE TABLE IF NOT EXISTS counter('count' INT);")

export const context = new Elysia({
	name: '@app/ctx',
})
	.decorate('db', db)
	.derive((ctx) => {
		function count(): number {
			return (ctx.db.query('select count from counter').get() as { count: number }).count
		}

		function add(amount = 1): number {
			db.prepare('UPDATE counter SET count = ?').run(count() + amount)
			return count()
		}

		return { count, add }
	})
	.decorate('render', async (template: HTMLTemplateResult) => {
		return new Response(await collectResult(render(template)), {
			headers: {
				'Content-Type': 'text/html',
			},
		})
	})
	.derive(({ set, headers }) => ({
		redirect: (href: string) => {
			if (headers['hx-request'] === 'true') {
				set.headers['HX-Location'] = href
			} else {
				set.redirect = href
			}
		},
	}))

type HandlerFn = Parameters<typeof context.post>[1]
export type Context = Parameters<HandlerFn>[0]
