import { LitElement, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { action, loader } from '~/lib/lit-server-components'
import type { add, getCount } from './x-counter.server'

// @serverElement('x-counter', ['post:add:count'])
// export class xCounter extends LitServerElement<{
// 	add: () => void
// }>(LitElement) {
// 	@property({ type: Number, reflect: true })
// 	count: number
//
// 	render() {
// 		return html` <button @click=${this.add}>push me daddy ${this.count}</button>`
// 	}
// }

@customElement('x-counter')
export class Counter extends LitElement {
	@property({ type: Number, reflect: true })
	count: number

	@loader({
		bind: 'count',
		path: import.meta.path
	})
	getCount: typeof getCount

	@action({
		path: import.meta.path
	})
	add: typeof add

	render() {
		return html` <button @click=${this.add}>push me daddy ${this.count}</button>`
	}
}
