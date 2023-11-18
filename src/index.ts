import { builder } from '~/macros/build' assert { type: 'macro' }
import { Elysia } from 'elysia'
import { staticPlugin } from '@elysiajs/static'
// import { SWCRouter } from '~/lib/lit-server-components'
import { layout } from './layout'
import { html } from 'lit'
import { map } from 'lit/directives/map.js'
import { context } from './context'
import '@/web/register-components'

await builder()

const post = {
	title: 'hello world',
	body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, minima neque numquam ipsa quia aperiam totam expedita ducimus repudiandae, animi ullam quisquam eaque aliquid assumenda odio exercitationem reiciendis quaerat harum?',
	userId: 1,
	id: 1,
}

const todos = [
	{ _id: 1, title: 'foobar', completed: false },
	{ _id: 2, title: 'bazbaz', completed: true },
]

const app = new Elysia()
	.use(staticPlugin())
	// .use(SWCRouter(context))
	.use(context)
	.get('/', (ctx) => {
		return ctx.render(
			layout(html`
				<x-counter count=${ctx.count()}></x-counter>
				<div class="square"></div>
			`),
		)
	})
	.get('/example', async (ctx) =>
		ctx.render(
			layout(html`
				<h1>Example page.</h1>
				<example-component></example-component>
			`),
		),
	)
	.get('/blog', async (ctx) =>
		ctx.render(
			layout(html`
				<div style="margin-left:350px; background-color: blue" class="square"></div>
				<blog-article .post=${post}></blog-article>
				<button>load todos</button>
				<x-swapped hx-get="/toswap" hx-trigger="click from:button" hx-swap="innerHTML"> </x-swapped>
			`),
		),
	)
	.get('/toswap', async (ctx) =>
		ctx.render(html`
			<ul>
				${map(
			todos,
			({ _id, title, completed }) => html`
						<to-do ._id=${_id} .title=${title} ?completed=${completed}> </to-do>
					`,
		)}
			</ul>
		`),
	)
	.listen(3000)

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)
