import { AppProps } from 'next/app'
import Head from 'next/head'

import '@/components/NProgress'

import 'nprogress/nprogress.css'
import '@/styles/index.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Component {...pageProps} />
			<Head>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
				<link rel="manifest" href="/site.webmanifest" />
				<meta name="theme-color" content="#ffffff" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
				<meta name="msapplication-TileColor" content="#00aba9" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@deadcoder0904" />
				<meta name="twitter:creator" content="@deadcoder0904" />
				<meta name="twitter:title" content="Akshay Kadam" />
				<meta name="twitter:description" content="Akshay Kadam" />
				<meta name="twitter:image" content={`https://akshaykadam.com`} />
				<meta property="og:url" content="https://akshaykadam.com" />
				<meta property="og:type" content="article" />
				<meta property="og:locale" content="en_US" />
				<meta property="og:site_name" content="Akshay Kadam's Blog" />
				<meta property="og:title" content="Akshay Kadam" />
				<meta property="og:description" content="Akshay Kadam" />
				<meta property="og:image" content={`https://akshaykadam.com`} />
				<link rel="alternate" type="application/rss+xml" title="RSS 2.0" href="/feed.xml" />
				<link rel="alternate" type="application/atom+xml" title="Atom 1.0" href="/atom.xml" />
				<link rel="alternate" type="application/json" title="JSON Feed" href="/feed.json" />
				<title>Akshay Kadam</title>
			</Head>
		</>
	)
}

export default MyApp
