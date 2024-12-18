import React from 'react'
import SubHero from '@/components/Header/SubHero'
import FeaturedPosts from './FeaturedPosts'
import Newsletter from './Newsletter'
import NewsCard from './NewsCard'
import { fetchAndFormatNews } from '@/lib/notion'

const LatestNewsPage: React.FC = async () => {
  const blogPosts = await fetchAndFormatNews()
  const featuredPosts = blogPosts.filter((post) => post.featured).slice(0, 3)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="bg-gray-50 text-gray-800">
      <SubHero
        headline="Latest News & Insights"
        description="Explore insights, industry trends, and company updates from the world
          of recruitment, HR, and beyond."
        primaryButton="Read Our Blog"
        secondaryButton="Subscribe for Updates"
      />

      <FeaturedPosts posts={featuredPosts} />

      <section className="bg-gray-100 px-6 py-12">
        <h2 className="text-center text-3xl font-bold">Latest Blog Posts</h2>
        <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {regularPosts.map((post, index) => (
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

      <Newsletter />
    </div>
  )
}

export default LatestNewsPage
