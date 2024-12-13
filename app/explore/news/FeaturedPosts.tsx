import React from 'react'
import NewsCard from './NewsCard'

interface FeaturedPostProps {
  posts: {
    imageLink: string
    title: string
    summary: string
    date: string
    blogPostLink: string
    author: string
  }[]
}

export default function FeaturedPosts({ posts }: FeaturedPostProps) {
  return (
    <section className="px-6 py-12">
      <h2 className="text-center text-3xl font-bold">Featured Insights</h2>
      <div className="mx-auto mt-8 grid max-w-6xl gap-8 md:grid-cols-3">
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
