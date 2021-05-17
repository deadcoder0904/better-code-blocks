import NextDocument, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import fs from 'fs'
import path from 'path'

class InlineStylesHead extends Head {
	getCssLinks: Head['getCssLinks'] = ({ allFiles }) => {
		const { assetPrefix } = this.context
		if (!allFiles || allFiles.length === 0) return null

		return allFiles
			.filter((file: any) => /\.css$/.test(file))
			.map((file: any) => (
				<style
					key={file}
					nonce={this.props.nonce}
					data-href={`${assetPrefix}/_next/${file}`}
					dangerouslySetInnerHTML={{
						__html: fs.readFileSync(path.join(process.cwd(), '.next', file), 'utf-8'),
					}}
				/>
			))
	}
}

class MyDocument extends NextDocument {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await NextDocument.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html lang="en">
				<InlineStylesHead>
					<Head>
						<link
							rel="preload"
							href="/fonts/Inter-roman.var-latin.woff2?3.13"
							as="font"
							type="font/woff2"
							crossOrigin="true"
						/>
					</Head>
				</InlineStylesHead>
				<body
				// className="bg-fixed bg-blue-900 bg-cover"
				// style={{
				// 	backgroundImage: "url('/bullseye-gradient.svg')",
				// }}
				>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
