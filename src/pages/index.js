import React from 'react'
import { motion } from "framer-motion"
import Link from 'next/link'
import { postFileName } from '@/utils/mdxUtils'
import fs from 'fs'
import matter from 'gray-matter'
import BlogList from '@/components/blogList'

const Home = ({ posts }) => {
  console.log(posts)
  return (
    <>
      <div className='mt-20 md:ml-16 ml-1'>
        <motion.div
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}>
          <p className='font-mono text-yellow-400 mb-8'><Link href={"https://hellofaizan.me"}><i className='bi bi-browser-safari mr-2'></i>Looking for my portfolio?</Link></p>
          <p className='text-lg font-mono'>👋 HelloFaizan Blog <Link href={"https://github.com/hellofaizan/blog"} target="_blank"><span className='hover:text-blue-500 text-gray-400'>- github</span></Link></p>
          <p className='ml-2 text-gray-400 font-mono'>Everything that comes into my mind will be written here.</p>
        </motion.div>

        <ul className="list-disc list-inside">
          <BlogList blogs={posts} />
        </ul>
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const posts = postFileName.map(slug => {
    const content = fs.readFileSync(`public/posts/${slug}`)
    const { data } = matter(content)

    return {
      frontmatter: data,
      slug
    }
  })

  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts))
    }
  }
}

export default Home