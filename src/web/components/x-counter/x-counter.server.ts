import { Context } from '@/context'

export function getCount(ctx: Context): number {
	return ctx.count()
}

export function add(ctx: Context): number {
	return ctx.add()
}
