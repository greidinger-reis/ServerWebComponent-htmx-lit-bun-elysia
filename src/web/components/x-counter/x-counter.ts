import { LitElement, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { action, loader } from '~/lib/lit-server-components'
import type { add, getCount } from './x-counter.server'

@customElement('x-counter')
export class Counter extends LitElement {
	@property({ type: Number, reflect: true })
	count: number

	@action({ bind: 'count' })
	add: typeof add

	render() {
		return html` <button @click=${() => this.add(2)}>push me daddy ${this.count}</button>`
	}
}
