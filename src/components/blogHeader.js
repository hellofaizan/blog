import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

function BlogHeader({ frontmatter }) {
    const router = useRouter()
    const { slug } = router.query
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
            {frontmatter.bannerUrl && <Image className='mt-3' src={frontmatter.bannerUrl} alt={frontmatter.title} width="1177" height="662"></Image>}
            
            {frontmatter.tags && (
                <div className='flex justify-between'>
                    <div className='flex space-x-2'>
                        <p className='mt-1 text-sm md:text-base text-[#454545] dark:text-[#bcbcbc]'>Share on</p>
                        <a className='mt-1' href={`https://twitter.com/intent/tweet?text=${frontmatter.title}&url=https://blog.hellofaizan.me/${slug}`} target="_blank" rel="noreferrer"><i className="bi bi-twitter text-[#454545] dark:text-[#bcbcbc] hover:text-blue-400 cursor-pointer"></i></a>
                        <a className='mt-1' href={`https://www.facebook.com/sharer/sharer.php?u=https://blog.hellofaizan.me/${slug}`} target="_blank" rel="noreferrer"><i className="bi bi-facebook text-[#454545] dark:text-[#bcbcbc] hover:text-blue-600 cursor-pointer"></i></a>
                        <a className='mt-1' href={`https://www.linkedin.com/shareArticle?mini=true&url=https://blog.hellofaizan.me/${slug}&title=${frontmatter.title}&summary=${frontmatter.description}&source=https://blog.hellofaizan.me/${frontmatter.slug}`} target="_blank" rel="noreferrer"><i className="bi bi-linkedin text-[#454545] dark:text-[#bcbcbc] hover:text-blue-700 cursor-pointer"></i></a>
                        <a className='mt-1' href={`https://wa.me/?text=${frontmatter.title} *Blog by HelloFaizan* - https://blog.hellofaizan.me/${slug}`} target="_blank" rel="noreferrer"><i className="bi bi-whatsapp text-[#454545] dark:text-[#bcbcbc] hover:text-green-500 cursor-pointer"></i></a>
                        
                    </div>
                    <p className='mt-1'>Tags: {""} {frontmatter.tags.map((tag, index, tags) => (
                        <span key={tag} className='text-sm md:text-base text-[#454545] dark:text-[#bcbcbc] hover:text-yellow-400'>{tag}{index < tags.length - 1 ? ", " : ""}</span>
                    ))}</p>
                </div>
            )}

            <h1 className='mt-4 mb-8 text-xl md:text-3xl font-bold font-mono'>{frontmatter.title}</h1>
            
        </div>

    </>
}

export default BlogHeader
