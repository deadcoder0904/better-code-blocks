export const importAll = (r: __WebpackModuleApi.RequireContext) =>
	r.keys().map((fileName: string) => ({
		slug: fileName.substr(2).replace(/\/index\.mdx$/, ''),
		module: r(fileName),
	}))

export const dateSortDesc = (a: Date, b: Date) => {
	if (a > b) return -1
	if (a < b) return 1
	return 0
}
