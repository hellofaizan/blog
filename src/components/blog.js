import React from 'react'
import { motion } from "framer-motion"
import Link from 'next/link'
import BlogHeader from './blogHeader'
import { format } from 'date-fns'
import BlogBody from './blogBody'

const Blog = ({ mdxSource, frontmatter }) => {
    return (
        <motion.div
            initial={{ opacity: 0.8, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="mt-10 md:mt-16 md:ml-16 m-[6px] md:m-0 md:w-1/2">
            <div>
                <div className='flex justify-between items-center'>
                <Link href={"/"}><i class="bi bi-skip-backward-fill text-sm md:text-base text-[#454545] dark:text-[#bcbcbc] hover:text-yellow-400 overflow-hidden rounded-2xl cursor-pointer hover:bg-[#353535] p-2"> go Back</i></Link>
                <p className='text-sm text-[#454545] dark:text-[#bcbcbc] hover:text-yellow-400'>{format(new Date(), 'PPP')}</p>
                </div>
                <BlogHeader frontmatter={frontmatter}></BlogHeader>
                <BlogBody mdxSource={mdxSource}></BlogBody>
                <p className='text-xl mt-16 mb-5'>Author: <span className='underline decoration-dotted hover:text-yellow-400'>{frontmatter.author}</span></p>
            </div>
        </motion.div>
    )
}

export default Blog