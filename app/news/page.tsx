import React from 'react'
import SubHero from '@/components/shared/Header/SubHero'
import BlogPostGrid from '../../components/Explore/News/BlogPostGrid'
import { fetchAndFormatNews } from '@/lib/notion'
import SubscribeToNewsLetter from '@/components/Explore/News/SubscribeToNewsLetter'

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
        primaryButtonLink="/explore/news/#latest-blog"
        secondaryButton="Subscribe for Updates"
        secondaryButtonLink="/explore/news/#subscribe-newsletter"
      />

      <BlogPostGrid heading="Featured Insights" posts={featuredPosts} />
      <div id="latest-blog">
        <BlogPostGrid heading="Latest Blog Posts" posts={regularPosts} bg />
      </div>

      <SubscribeToNewsLetter />
    </div>
  )
}

export default LatestNewsPage
