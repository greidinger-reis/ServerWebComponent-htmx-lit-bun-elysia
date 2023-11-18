import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('x-swapped')
export class xSwapped extends LitElement {
	static styles = css`
		:host {
			display: block;
			border: 3px solid white;
			border-radius: 1rem;
			padding: 1rem;
			margin: 2rem;
			color: white;
		}
	`

	render() {
		return html`
			hello from outside, inner will be swapped
			<slot></slot>
		`
	}
}
