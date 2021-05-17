export type Meta = {
	title: string
	date: Date
	tags: Array<string>
	author: string
	published: Boolean
}

export type Post = {
	slug: string
	module: {
		default: any
		meta: Meta
	}
}
