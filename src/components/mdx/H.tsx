import React from 'react'
import rangeParser from 'parse-numeric-range'

type HProps = {
	id: string
	index: string
}

export const H = ({ id, index, ...props }: HProps) => {
	const triggerRef = React.useRef<HTMLElement>(null)

	React.useEffect(() => {
		const trigger = triggerRef.current

		const codeBlock = document.getElementById(id)
		if (!codeBlock) return

		const allHighlightWords = codeBlock.querySelectorAll('.highlight-word')
		const targetIndex = rangeParser(index).map((i: number) => i - 1)
		if (Math.max(...targetIndex) >= allHighlightWords.length) return

		const addClass = () =>
			targetIndex.forEach((i: number) => allHighlightWords[i].classList.add('on'))
		const removeClass = () =>
			targetIndex.forEach((i: number) => allHighlightWords[i].classList.remove('on'))

		if (trigger) {
			trigger.addEventListener('mouseenter', addClass)
			trigger.addEventListener('mouseleave', removeClass)
		}

		return () => {
			if (trigger) {
				trigger.removeEventListener('mouseenter', addClass)
				trigger.removeEventListener('mouseleave', removeClass)
			}
		}
	}, [])

	return <code ref={triggerRef} {...props} />
}
