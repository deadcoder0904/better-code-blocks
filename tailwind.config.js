const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

const fullBleed = {
	width: '100%',
	gridColumn: '1 / -1',
}

const almostFullBleed = {
	...fullBleed,
	width: '90%',
}

module.exports = {
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
	purge: {
		mode: 'all',
		content: ['./src/**/*.{js,ts,jsx,tsx}', './next.config.js'],
		options: {
			extractors: [
				{
					extensions: ['mdx'],
					extractor: (content) => {
						content = mdx.sync(content)

						// Capture as liberally as possible, including things like `h-(screen-1.5)`
						const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []

						// Capture classes within other delimiters like .block(class="w-1/2") in Pug
						const innerMatches =
							content.match(/[^<>"'`\s.(){}[\]#=%]*[^<>"'`\s.(){}[\]#=%:]/g) || []

						return broadMatches.concat(innerMatches)
					},
				},
			],
		},
	},
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',

			black: '#000',
			white: '#fff',

			amber: colors.amber,
			blue: colors.blue,
			cyan: colors.cyan,
			emerald: colors.emerald,
			fuchsia: colors.fuchsia,
			gray: colors.coolGray,
			blueGray: colors.blueGray,
			green: colors.green,
			indigo: colors.indigo,
			lightBlue: colors.lightBlue,
			lime: colors.lime,
			orange: {
				...colors.orange,
				1000: '#4a2008',
			},
			pink: {
				...colors.pink,
				1000: '#460d25',
			},
			purple: colors.purple,
			red: colors.red,
			rose: colors.rose,
			teal: colors.teal,
			violet: colors.violet,
			yellow: colors.yellow,
			code: {
				green: '#b5f4a5',
				yellow: '#ffe484',
				purple: '#d9a9ff',
				red: '#ff8383',
				blue: '#93ddfd',
				white: '#fff',

				punctuation: '#A1E8FF',
				tag: '#D58FFF',
				'attr-name': '#4BD0FB',
				'attr-value': '#A2F679',
				string: '#A2F679',
				highlight: 'rgba(134, 239, 172, 0.25)',
			},
		},
		extend: {
			typography: (theme) => ({
				DEFAULT: {
					css: {
						maxWidth: 'none',
						color: theme('colors.blueGray.500'),
						'> :first-child': { marginTop: '-' },
						'> :last-child': { marginBottom: '-' },
						'&:first-child > :first-child': {
							marginTop: '0',
						},
						'&:last-child > :last-child': {
							marginBottom: '0',
						},
						h1: {
							fontSize: theme('fontSize.4xl')[0],
							fontWeight: theme('fontWeight.extrabold'),
						},
						h2: {
							fontSize: theme('fontSize.3xl')[0],
							fontWeight: theme('fontWeight.bold'),
						},
						h3: {
							fontSize: theme('fontSize.2xl')[0],
						},
						h4: {
							fontSize: theme('fontSize.xl')[0],
						},
						h5: {
							fontSize: theme('fontSize.lg')[0],
						},
						h6: {
							fontSize: theme('fontSize.base')[0],
						},
						'h1, h2, h3, h4, h5, h6': {
							fontWeight: theme('fontWeight.semibold'),
							color: theme('colors.blueGray.900'),
						},
						'h1, h2': {
							letterSpacing: '-0.025em',
						},
						'h2, h3': {
							'scroll-margin-block': `${(70 + 40) / 16}rem`,
						},
						'h3, h4, h5, h6': {
							fontWeight: theme('fontWeight.semibold'),
						},
						p: {
							fontSize: theme('fontSize.xl')[0],
							lineHeight: theme('lineHeight.9'),
							color: theme('colors.blueGray.600'),
						},
						'p + *': {
							marginTop: 0,
						},
						'* + table': {
							marginTop: theme('spacing.8'),
						},
						hr: {
							borderTopWidth: theme('borderWidth.2'),
							color: theme('colors.blueGray.200'),
						},
						'ul, ol': {
							position: 'relative',
						},
						'ul > li, ol > li': {
							paddingLeft: '1.5em',
							fontSize: theme('fontSize.xl')[0],
							color: theme('colors.blueGray.600'),
							lineHeight: theme('lineHeight.9'),
							overflowWrap: 'break-word',
						},
						'ul > li::before': {
							width: '0.75em',
							height: '0.100em',
							top: 'calc(0.875em - 0.0625em)',
							left: 0,
							borderRadius: 0,
							backgroundColor: theme('colors.blueGray.400'),
						},
						'ol > li::before': {},
						a: {
							color: theme('colors.cyan.700'),
							fontWeight: theme('fontWeight.medium'),
							textDecoration: 'none',
							boxShadow: theme('boxShadow.link'),
						},
						'a code': {
							color: 'inherit',
							fontWeight: 'inherit',
						},
						strong: {
							color: theme('colors.blueGray.900'),
							fontWeight: theme('fontWeight.medium'),
						},
						'a strong': {
							color: 'inherit',
							fontWeight: 'inherit',
						},
						code: {
							fontSize: theme('fontSize.base')[0],
							fontWeight: '400',
							padding: theme('spacing.1'),
							color: theme('colors.blueGray.200'),
							backgroundColor: theme('colors.blueGray.900'),
							borderRadius: theme('borderRadius.md'),
							overflowX: 'auto',
						},
						'code::before': {
							// content: 'none',
						},
						'code::after': {
							// content: 'none',
						},
						pre: {
							backgroundColor: '-',
							color: theme('colors.white'),
							borderRadius: 0,
							marginTop: 0,
							marginBottom: 0,
						},
						table: {
							...almostFullBleed,
							marginLeft: 'auto',
							marginRight: 'auto',
							marginBottom: theme('spacing.16'),
							fontSize: theme('fontSize.sm')[0],
							lineHeight: theme('fontSize.sm')[1].lineHeight,
							tableLayout: theme('tableLayout.fixed'),
							'@media (min-width: theme("screens.md"))': {
								width: '75%',
							},
						},
						thead: {
							color: theme('colors.blueGray.600'),
							borderBottomColor: theme('colors.blueGray.200'),
						},
						'thead th': {
							fontSize: theme('fontSize.2xl')[0],
							fontWeight: theme('fontWeight.extrabold'),
							lineHeight: theme('lineHeight.9'),
							color: theme('colors.blueGray.900'),
							letterSpacing: theme('letterSpacing.wider'),
							paddingTop: 0,
							verticalAlign: 'middle',
						},
						'tbody tr': {
							borderBottomColor: theme('colors.blueGray.200'),
						},
						'tbody td': {
							fontSize: theme('fontSize.lg')[0],
							lineHeight: theme('lineHeight.9'),
							color: theme('colors.blueGray.600'),
						},
						'tbody tr:last-child': {
							borderBottomWidth: '1px',
						},
						'tbody code': {
							fontSize: theme('fontSize.xs')[0],
						},
					},
				},
			}),
			fontFamily: {
				sans: ['Inter var', ...defaultTheme.fontFamily.sans],
				mono: ['Menlo', ...defaultTheme.fontFamily.mono],
				source: ['Source Sans Pro', ...defaultTheme.fontFamily.sans],
				'ubuntu-mono': ['Ubuntu Mono', ...defaultTheme.fontFamily.mono],
				system: defaultTheme.fontFamily.sans,
				flow: 'Flow',
			},
			spacing: {
				18: '4.5rem',
				88: '22rem',
				'15px': '0.9375rem',
				'23px': '1.4375rem',
				full: '100%',
			},
			width: {
				xl: '36rem',
			},
			maxWidth: {
				'4.5xl': '60rem',
				'8xl': '90rem',
			},
			maxHeight: (theme) => ({
				sm: '30rem',
				'(screen-18)': `calc(100vh - ${theme('spacing.18')})`,
			}),
			boxShadow: {
				px: '0 0 0 1px rgba(0, 0, 0, 0.5)',
				link: 'inset 0 -0.125em 0 0 #fff, inset 0 -0.375em 0 0 rgba(165, 243, 252, 0.4)',
			},
			keyframes: {
				'flash-code': {
					'0%': { backgroundColor: 'rgba(134, 239, 172, 0.25)' },
					'100%': { backgroundColor: 'transparent' },
				},
			},
			animation: {
				'flash-code': 'flash-code 1s forwards',
				'flash-code-slow': 'flash-code 2s forwards',
			},
			cursor: {
				grab: 'grab',
				grabbing: 'grabbing',
			},
			transitionDuration: {
				1500: '1.5s',
			},
			backgroundImage: {
				squiggle: `url("data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%206%203'%20enable-background%3D'new%200%200%206%203'%20height%3D'3'%20width%3D'6'%3E%3Cg%20fill%3D'%23fbbf24'%3E%3Cpolygon%20points%3D'5.5%2C0%202.5%2C3%201.1%2C3%204.1%2C0'%2F%3E%3Cpolygon%20points%3D'4%2C0%206%2C2%206%2C0.6%205.4%2C0'%2F%3E%3Cpolygon%20points%3D'0%2C2%201%2C3%202.4%2C3%200%2C0.6'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E")`,
			},
			scale: {
				80: '0.8',
			},
			skew: {
				'-20': '-20deg',
			},
		},
	},
	variants: {},
	plugins: [
		function ({ addBase, addComponents, theme }) {
			addBase([
				{
					'@font-face': {
						fontFamily: 'Inter var',
						fontWeight: '100 900',
						fontStyle: 'normal',
						fontNamedInstance: 'Regular',
						fontDisplay: 'swap',
						src: 'url("/fonts/Inter-roman.var-latin.woff2?3.13") format("woff2")',
					},
				},
				{
					'@font-face': {
						fontFamily: 'Inter var',
						fontWeight: '100 900',
						fontStyle: 'italic',
						fontNamedInstance: 'Italic',
						fontDisplay: 'swap',
						src: 'url("/fonts/Inter-italic.var-latin.woff2?3.13") format("woff2")',
					},
				},
			])
		},
		require('@tailwindcss/typography'),
	],
}
