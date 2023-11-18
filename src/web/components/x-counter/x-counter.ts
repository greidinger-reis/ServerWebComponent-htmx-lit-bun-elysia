import { LitElement, html } from 'lit'
import { property } from 'lit/decorators.js'
import { LitServerElement, serverElement } from '@lit-swc'

@serverElement('x-counter', ['post:add:count'])
export class xCounter extends LitServerElement<{
	add: () => void
}>(LitElement) {
	@property({ type: Number, reflect: true })
	count: number

	render() {
		return html` <button @click=${this.add}>push me daddy ${this.count}</button>`
	}
}
