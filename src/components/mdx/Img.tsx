import Image, { ImageProps } from 'next/image'

type FillImageProps = Omit<
	ImageProps,
	'layout' | 'height' | 'width' | 'placeholder' | 'blurDataURL'
>

export const Img = ({ className = '', ...props }: FillImageProps) => (
	<div className="unset-img full-bleed">
		<Image className={`${className} custom-img`} layout="fill" {...props} />
	</div>
)

// export const Img = ({ className = '', src }: ImageProps) => (
// 	<div className="unset-img full-bleed">
// 		<Image className={`${className} custom-img`} src={src} layout="fill" />
// 	</div>
// )

// export const Img = ({ className = 'full-bleed', ...props }) => (
// 	<img className={`${className}`} {...props} />
// )
