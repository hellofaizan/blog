import path from 'path'
import fs from 'fs'

export const postFilePaths = path.join('public', 'posts')

export const postFileName = fs.readdirSync(postFilePaths).filter((fileName) => fileName.endsWith('.mdx'))
