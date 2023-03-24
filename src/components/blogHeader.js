import Head from 'next/head'
import React from 'react'

function BlogHeader({ frontmatter }) {
    console.log(frontmatter)
    return <>
        <Head>
            <title>{frontmatter.title} - HelloFaizan Blog</title>
            <meta name="description" content={frontmatter.description} />
            <meta name="author" content="Hello Faizan" />
            <meta property="og:title" content={`${frontmatter.title} - HelloFaizan Blog`} />
            <meta property="og:description" content={frontmatter.description} />
            <meta property="og:image" itemProp="image" content={frontmatter.bannerUrl} />
            <meta property="og:type" content="article" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@HelloFaizandev" />
            <meta name="twitter:creator" content="@HelloFaizandev" />
            <meta name="twitter:title" content={`${frontmatter.title} - HelloFaizan Blog`} />
            <meta name="twitter:image" itemProp="image" content={frontmatter.bannerUrl} />
        </Head>
        <div>
            <h1 className='mt-5 text-2xl md:text-4xl font-bold font-mono'>{frontmatter.title}</h1>
        </div>
    </>
}

export default BlogHeader
