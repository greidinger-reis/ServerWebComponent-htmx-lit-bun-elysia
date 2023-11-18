import { z } from 'zod'

export const PostProps = z.object({
	id: z.number(),
})

export type TPostProps = z.infer<typeof PostProps>
