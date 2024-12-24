import React from 'react'
import NewsCard from './NewsCard'

interface Post {
  imageLink: string
  title: string
  summary: string
  date: string
  blogPostLink: string
  author: string
}

export default function BlogPostGrid({
  heading,
  posts,
  bg,
}: {
  heading: string
  posts: Post[]
  bg?: boolean
}) {
  return (
    <section className={`${bg ? 'bg-gray-100' : null} px-6 py-12`}>
      <h2 className="text-center text-3xl font-bold">{heading}</h2>
      <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <NewsCard
            key={index}
            imageLink={post.imageLink}
            title={post.title}
            summary={post.summary}
            date={post.date}
            blogPostLink={post.blogPostLink}
            author={post.author}
          />
        ))}
      </div>
    </section>
  )
}
