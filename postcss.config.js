module.exports = {
	plugins: [
		'postcss-import',
		'tailwindcss',
		'postcss-flexbugs-fixes',
		'postcss-nested',
		'postcss-custom-properties',
		'autoprefixer',
		// [
		// 	'postcss-preset-env',
		// 	{
		// 		autoprefixer: {
		// 			flexbox: 'no-2009',
		// 		},
		// 		stage: 3,
		// 		features: {
		// 			'custom-properties': true,
		// 			'nesting-rules': true,
		// 		},
		// 	},
		// ],
	],
}
