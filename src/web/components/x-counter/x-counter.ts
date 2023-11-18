import { LitElement, html } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import { loader } from '~/lib/lit-server-components/core'

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

@customElement('x-counter2')
export class Counter extends LitElement {
	@state()
	count: number

	// @action({
	// 	bind: this.count
	// })
	// add: typeof add

	@loader({
		bind: 'count',
		path: import.meta.path
	})
	getCount: any

	render() {
		return html` <button @click=${this.add}>push me daddy ${this.count}</button>`
	}
}
