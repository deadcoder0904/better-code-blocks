import glob from 'fast-glob'
import path from 'path'

export const POSTS_PATH = path.join(process.cwd(), 'src/pages')
export const essayFilePaths = glob.sync(`${POSTS_PATH}/essay/**/*.mdx`)
export const tutorialFilePaths = glob.sync(`${POSTS_PATH}/tutorial/**/*.mdx`)
