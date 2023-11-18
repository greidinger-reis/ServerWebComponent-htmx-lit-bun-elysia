import type { TPostProps } from '@/types'
import { getServerProps } from '~/lib/lit-server-components'
import { Context } from 'elysia'

export const fetchblogpost = async (ctx: Context) => {
	const { id } = getServerProps<TPostProps>(ctx)
	return await (await fetch('https://jsonplaceholder.typicode.com/posts/' + id)).json()
}
