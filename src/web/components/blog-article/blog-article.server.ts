import type { TPostProps } from '@/types'
import { getServerProps } from '@lit-swc'
import { Context } from 'elysia'

export const fetchblogpost = async (ctx: Context) => {
	const { id } = getServerProps<TPostProps>(ctx)
	return await (await fetch('https://jsonplaceholder.typicode.com/posts/' + id)).json()
}
