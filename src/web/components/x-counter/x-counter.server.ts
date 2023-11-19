import { Context } from '@/context'

//TODO: Remove ctx as parameters.
// This should be in a function, so that we can pass the parameters correctly here from the client.
export function getCount(ctx: Context): number {
	return ctx.count()
}

//TODO: Remove ctx as parameters.
// This should be in a function, so that we can pass the parameters correctly here from the client.
export function add(ctx: Context, amount = 1): number {
	return ctx.add(amount)
}
