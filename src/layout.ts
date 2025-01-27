import type { HTMLTemplateResult } from 'lit'
import { html } from 'lit'

export const layout = (slot: HTMLTemplateResult) =>
	html`<html lang="en">
		<head>
			<meta charset="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<title>Document</title>
			<script
				src="https://unpkg.com/htmx.org@1.9.5"
				integrity="sha384-xcuj3WpfgjlKF+FXhSQFQ0ZNr39ln+hwjN3npfM9VBnUskLolQAcN80McRIVOPuO"
				crossorigin="anonymous"
			></script>
			<script defer type="module" src="public/index.js"></script>
			<!-- This should not be in here, but i'll leave it for now. -->
			<script>
			</script>
		</head>
		<body>
			${slot}
		</body>
	</html>`
