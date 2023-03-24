import React from 'react'
import { motion } from "framer-motion"
import Link from 'next/link'
import BlogHeader from './blogHeader'

const Blog = ({ mdxSource, frontmatter }) => {
    return (
        <motion.div
            initial={{ opacity: 0.8, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="mt-20 md:ml-16 ml-[8px] md:w-1/2">
            <div>
                <Link href={"/"}><i class="bi bi-skip-backward-fill text-[#454545] dark:text-[#bcbcbc] hover:text-yellow-400 overflow-hidden rounded-2xl cursor-pointer hover:bg-[#353535] p-2"> go Back</i></Link>
                <BlogHeader frontmatter={frontmatter}></BlogHeader>
            </div>
        </motion.div>
    )
}

export default Blog