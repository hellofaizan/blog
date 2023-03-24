import Link from "next/link";
import React from "react";

function BlogList({ blogs }) {
    return (
        <>
            {blogs.map(blog => (
                <li key={blog.frontmatter.title}><Link href={`/blogs/${blog.slug}`}><span className="text-blue-500 hover:text-blue-600 text-lg">{blog.frontmatter.title}</span></Link></li>
            ))}
        </>
    )
}

export default BlogList