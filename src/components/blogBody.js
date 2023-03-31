import React from 'react'
import { MDXRemote } from 'next-mdx-remote'
import Link from 'next/link'
import YouTube from '@/components/youtube'

const components = {
    h1: ({ children }) => <h1 className='text-2xl my-2 md:text-3xl font-bold'>{children}</h1>,
    h2: ({ children }) => <h2 className='text-xl my-2 md:text-2xl font-bold'>{children}</h2>,
    h3: ({ children }) => <h3 className='text-lg my-2 md:text-xl font-bold'>{children}</h3>,
    
    p: ({ children }) => <p className='text-sm md:text-base'>{children}</p>,

    a: ({ children, href }) => {
        <Link href={href} className="text-blue-500 hover:text-yellow-400" target="_blank">{children}</Link>
    },

    blockquote: ({ children }) => <blockquote className='border-l-4 border-yellow-400 pl-4'>{children}</blockquote>,
    
    hr: () => <hr className='my-4' />,
    br: () => <br />,
    strong: ({ children }) => <strong className='font-bold'>{children}</strong>,
    em: ({ children }) => <em className='italic'>{children}</em>,
    inlineCode: ({ children }) => <code className='bg-gray-100 dark:bg-gray-800 rounded-md p-1'>{children}</code>,
    code: ({ children }) => <pre className='bg-gray-100 dark:bg-gray-800 rounded-md p-4'>{children}</pre>,
    table: ({ children }) => <table className='table-auto'>{children}</table>,

    ul: ({ children }) => <ul className='list-disc list-inside'>{children}</ul>,
    ol: ({ children }) => <ol className='list-decimal list-inside'>{children}</ol>,
    li: ({ children }) => <li className='my-1'>{children}</li>,
    img: ({ src, alt }) => <img src={src} alt={alt} className='w-full' />,

    // Custom components
    YouTube: ({ id }) => <YouTube id={id} />,
     

}

const BlogBody = ({mdxSource}) => {
  return (
    <div className='mt-2 flex flex-col gap-2 mb-5'>
        <MDXRemote {...mdxSource} components={components} />
    </div>
  )
}

export default BlogBody