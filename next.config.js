const path = require('path')
const { createLoader } = require('simple-functional-loader')
const visit = require('unist-util-visit')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
})

const rehypeHighlightCode = require('./rehype/highlight-code')
const rehypeMetaAttribute = require('./rehype/meta-attribute')
// const { withSyntaxHighlighting } = require('./remark/withSyntaxHighlighting')
// const withCodeSamples = require('./remark/withCodeSamples')

module.exports = withBundleAnalyzer({
	future: {
		webpack5: true,
	},
	pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
	experimental: {
		modern: true,
	},
	redirects: async () => {
		return require('./redirects.json')
	},
	webpack: (config, options) => {
		config.module.rules.push({
			test: /\.(svg|png|jpe?g|gif|mp4)$/i,
			use: [
				{
					loader: 'file-loader',
					options: {
						publicPath: '/_next',
						name: 'static/media/[name].[hash].[ext]',
					},
				},
			],
		})

		const mdx = [
			options.defaultLoaders.babel,
			{
				loader: '@mdx-js/loader',
				options: {
					remarkPlugins: [
						/*withCodeSamples, withSyntaxHighlighting*/
					],
					rehypePlugins: [rehypeMetaAttribute, rehypeHighlightCode],
				},
			},
		]

		config.module.rules.push({
			test: /\.mdx$/,
			oneOf: [
				{
					resourceQuery: /preview/,
					use: [
						...mdx,
						createLoader(function (src) {
							if (src.includes('<!-- more -->')) {
								const [preview] = src.split('<!-- more -->')
								return this.callback(null, preview)
							}

							const [preview] = src.split('<!--/excerpt-->')
							return this.callback(null, preview.replace('<!--excerpt-->', ''))
						}),
					],
				},
				{
					resourceQuery: /rss/,
					use: [
						...mdx,
						createLoader(function (src) {
							return this.callback(null, src)
						}),
					],
				},
				{
					include: [path.resolve(__dirname, 'src/pages/essay')],
					use: [
						...mdx,
						createLoader(function (src) {
							const content = [
								'import Essay from "@/components/Essay"',
								'export { getStaticProps } from "@/utils/essay/getStaticProps"',
								src,
								'export default (props) => <Essay meta={meta} {...props} />',
							].join('\n')

							if (content.includes('<!-- more -->')) {
								return this.callback(null, content.split('<!-- more -->').join('\n'))
							}

							return this.callback(null, content.replace(/<!--excerpt-->.*<!--\/excerpt-->/s, ''))
						}),
					],
				},
				{
					include: [path.resolve(__dirname, 'src/pages/tutorial')],
					use: [
						...mdx,
						createLoader(function (src) {
							const content = [
								'import Tutorial from "@/components/Tutorial"',
								'export { getStaticProps } from "@/utils/tutorial/getStaticProps"',
								src,
								'export default (props) => <Tutorial meta={meta} {...props} />',
							].join('\n')

							if (content.includes('<!-- more -->')) {
								return this.callback(null, content.split('<!-- more -->').join('\n'))
							}

							return this.callback(null, content.replace(/<!--excerpt-->.*<!--\/excerpt-->/s, ''))
						}),
					],
				},
			],
		})

		if (!options.dev && options.isServer) {
			const originalEntry = config.entry

			config.entry = async () => {
				const entries = { ...(await originalEntry()) }
				entries['./scripts/build-rss'] = './scripts/build-rss.js'
				entries['./scripts/build-sitemap'] = './scripts/build-sitemap.js'
				return entries
			}
		}

		return config
	},
})
