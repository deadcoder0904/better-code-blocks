import fs from 'fs'
import path from 'path'
import ReactDOMServer from 'react-dom/server'
import { MDXProvider } from '@mdx-js/react'
import { Feed } from 'feed'

import { MDXComponents } from '@/components/mdx/index'
import { getAllPublishedEssays } from '@/utils/essay/getAllEssayPreviews'
import { getAllPublishedTutorials } from '@/utils/tutorial/getAllTutorialPreviews'

const siteUrl = 'https://akshaykadam.com'
const author = {
	name: 'Akshay Kadam',
	email: 'akshaykadam0904@gmail.com',
	link: 'https://twitter.com/@deadcoder0904',
}

const feed = new Feed({
	title: 'Akshay Kadam',
	description: 'Posts about Startups, Entrepreneurship, SaaS, Tech & much more.',
	id: siteUrl,
	link: siteUrl,
	language: 'en',
	image: `${siteUrl}/favicon-32x32.png`,
	favicon: `${siteUrl}/favicon.ico`,
	copyright: 'All rights reserved 2020, Akshay Kadam',
	feedLinks: {
		json: `${siteUrl}/json`,
		atom: `${siteUrl}/atom`,
	},
	author,
})

const posts = [...getAllPublishedEssays(), ...getAllPublishedTutorials()]

posts.forEach(({ slug, module: { meta, default: Content } }) => {
	const mdx = (
		<MDXProvider components={MDXComponents}>
			<Content />
		</MDXProvider>
	)
	const html = ReactDOMServer.renderToStaticMarkup(mdx)
	const postText = `<div style="margin-top=55px; font-style: italic;">(The post <a href="${siteUrl}/${slug}">${meta.title}</a> appeared first on <a href="${siteUrl}">Akshay Kadam's Blog</a>.)</div>`
	feed.addItem({
		title: meta.title,
		id: meta.title,
		link: slug,
		comments: meta.discussion,
		description: meta.description,
		content: html + postText,
		author,
		date: new Date(meta.date),
		image: siteUrl + meta.image,
		extensions: [
			{
				name: '_comments',
				objects: {
					about: 'link to discussions forum',
					comments: meta.discussion,
				},
			},
		],
	})
})

fs.writeFileSync('./out/feed.xml', feed.rss2())
fs.writeFileSync('./out/atom.xml', feed.atom1())
fs.writeFileSync('./out/feed.json', feed.json1())
