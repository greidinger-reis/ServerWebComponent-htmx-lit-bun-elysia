import { LitElement, html, css } from 'lit'
import { query } from 'lit/decorators.js'
import { property } from 'lit/decorators.js'
import { LitServerElement, serverElement } from '@lit-swc'
import type { TPostProps } from '@/types'

type Post = {
	userId: number
	id: number
	title: string
	body: string
}

@serverElement('blog-article', ['post:fetchblogpost:post'])
export class BlogArticle extends LitServerElement<{
	fetchblogpost: (params: TPostProps) => void
}>(LitElement) {
	static styles = css`
		:host {
			display: block;
			background: limegreen;
		}
	`
	@property({ type: Object, reflect: true })
	post: Post
	@query('main') $main: HTMLElement
	handleClick(e: Event) {
		this.$main.part.add('active')
	}
	render() {
		const { title, body, id } = this.post
		return html`
			get post number
			<input
				type="number"
				value=${id}
				@change=${<T extends HTMLInputElement>(e: Event<T>) =>
					this.fetchblogpost({ id: +(e.target as T).value })}
			/>
			<article part="article">
				<header part="header">${title} ${id}</header>
				<main part="main" @click=${this.handleClick}>${body}</main>
				<footer part="footer">wrote by ${html`hello`}</footer>
			</article>
		`
	}
}
