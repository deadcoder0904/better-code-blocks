import tinytime from 'tinytime'

const dateTemplate = tinytime('{MMMM} {DD}, {YYYY}')
export const formatDate = (x: Date) => dateTemplate.render(new Date(x))
