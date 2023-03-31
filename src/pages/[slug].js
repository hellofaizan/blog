import React from 'react'
import { postFileName, postFilePaths } from '@/utils/mdxUtils'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import Blog from '@/components/blog'
import rehypeHighlight from 'rehype-highlight'
import "highlight.js/styles/shades-of-purple.css";

const BlogPage = ({ mdxSource, frontmatter }) => {
    return (
        <>
            <Blog mdxSource={mdxSource} frontmatter={frontmatter}></Blog>
        </>
    )
}

export async function getStaticProps({ params }) {
    const { slug } = params
    const postPath = path.join(postFilePaths, `${slug}.mdx`)
    const source = fs.readFileSync(postPath, 'utf8')
    const { data: frontmatter, content } = matter(source)
    const mdxSource = await serialize(content, {
        mdxOptions: {
            rehypePlugins: [rehypeHighlight],
        }
    })
    return {
        props: {
            mdxSource,
            frontmatter: JSON.parse(JSON.stringify(frontmatter)),
            slug
        }
    }
}

export async function getStaticPaths() {
    const postsPaths = postFileName.map((slug) => {
        return {
            params: {
                slug: slug.replace('.mdx', '')
            }
        }
    })
    return {
        paths: postsPaths,
        fallback: false
    }
}

export default BlogPage