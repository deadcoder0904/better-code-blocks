import React from 'react'

type RegisterLinkProps = {
	id: string
	index: number
	href: string
}

export const RegisterLink = ({ id, index, href }: RegisterLinkProps) => {
	const isExternal = href.startsWith('http')

	React.useEffect(() => {
		const codeBlock = document.getElementById(id)
		if (!codeBlock) return

		const allHighlightWords = codeBlock.querySelectorAll('.highlight-word')
		const target = allHighlightWords[index - 1]
		if (!target) return

		target.replaceWith(
			Object.assign(document.createElement('a'), {
				href,
				innerHTML: target.innerHTML,
				className: target.className,
				...(isExternal ? { target: '_blank', rel: 'noopener' } : {}),
			})
		)
	}, [])

	return null
}
