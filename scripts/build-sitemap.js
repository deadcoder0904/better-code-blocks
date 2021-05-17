import fs from 'fs'
import glob from 'fast-glob'
import prettier from 'prettier'
import { getAllPublishedEssays } from '@/utils/essay/getAllEssayPreviews'
import { getAllPublishedTutorials } from '@/utils/tutorial/getAllTutorialPreviews'

const posts = [...getAllPublishedEssays(), ...getAllPublishedTutorials()]

const config = {
	siteUrl: 'https://akshaykadam.com',
	changefreq: 'daily',
	priority: '0.7',
	lastmod: new Date().toISOString(),
}

const robotsTxt = `
User-agent: *
Allow: /
Host: ${config.siteUrl}
Sitemap: ${config.siteUrl}/sitemap.xml
`.trim()

const main = async () => {
	const prettierConfig = await prettier.resolveConfig('./prettier.config.js')

	const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
            ${posts
							.map((post) => {
								return `
                        <url>
														<loc>${`${config.siteUrl}/${post.slug}`}</loc>
														<changefreq>${`${config.changefreq}`}</changefreq>
														<priority>${`${config.priority}`}</priority>
														<lastmod>${`${config.lastmod}`}</lastmod>
                        </url>
                    `
							})
							.join('')}
        </urlset>
    `

	const formatted = prettier.format(sitemap, {
		...prettierConfig,
		parser: 'html',
	})

	fs.writeFileSync('public/sitemap.xml', formatted)
	fs.writeFileSync('public/robots.txt', robotsTxt)
}

main()
