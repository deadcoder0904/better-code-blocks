const visit = require('unist-util-visit')

var re = /\b([-\w]+)(?:=(?:"([^"]*)"|'([^']*)'|([^"'\s]+)))?/g

module.exports = (options = {}) => {
	return (tree) => {
		visit(tree, 'element', visitor)
	}

	function visitor(node, index, parentNode) {
		let match

		if (node.tagName === 'pre') {
			const code = node.children.find((d) => d.tagName === 'code')

			if (code.properties.metastring) {
				code.properties.metastring.split(' ').forEach((item) => {
					const [metaKey, metaValue] = item.split('=')
					node.properties[metaKey] = metaValue || ''
				})
			}
		}
	}
}
