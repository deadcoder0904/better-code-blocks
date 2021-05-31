import Image, { ImageProps } from 'next/image'

export const Img = ({ className = '', src }: ImageProps) => (
	<div className="unset-img full-bleed">
		<Image className={`${className} custom-img`} src={src} layout="fill" />
	</div>
)

// export const Img = ({ className = 'full-bleed', ...props }) => (
// 	<img className={`${className}`} {...props} />
// )
