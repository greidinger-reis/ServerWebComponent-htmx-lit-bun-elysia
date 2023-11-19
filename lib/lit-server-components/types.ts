import { Context } from 'elysia'
import { LitElement } from 'lit'

//TODO: Document types more

export type LitElementConstructor = new (...args: any[]) => LitElement
export type GenericConstructor<T> = new (...args: any[]) => T
export type HTTPVerb = 'get' | 'post' | 'put' | 'delete' | 'patch'
export type WiredProperty = string
export type Handler = () => Promise<any>
export type HandlerFnName = string
export type ComponentTag = string

export enum SWCKind {
	Loader = 'loader',
	Action = 'action',
}

export type CustomElementClass = Omit<typeof HTMLElement, 'new'>

export type ServerComponentRoute = {
	kind: SWCKind
	action: HandlerFnName
	bind?: WiredProperty
	res?: (ctx: Context) => Promise<any>
}
// export interface ISWC {
// 	[action: WiredEvent]: (parameters: { [key: string]: any }) => void
// }
// export type Prop = {
// 	[prop: WiredProperty]: string
// }
// export type Event = {
// 	[action: WiredEvent]: Prop
// }
