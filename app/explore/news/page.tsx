import React from 'react'

import SubHero from '@/components/Header/SubHero'
import { Client } from '@notionhq/client'
import FeaturedPosts from './FeaturedPosts'
import Newsletter from './Newsletter'
import NewsCard from './NewsCard'

const fetchBlogPosts = async (): Promise<string[]> => {
  const databaseId = '158c4d0ef10880d386f2c94c94a3600b'
  const response = await notion.databases.query({
    database_id: databaseId,
  })

  const blogPosts = response.results
  return blogPosts as any
}

export interface BlogPost {
  title: string
  author: string
  image: string
  markdown: string
}
//  Initialize Notion Client
const notion = new Client({ auth: process.env.NOTION_API_KEY })

const getCoverImageUrl = (post: any): string => {
  try {
    return post.properties['Cover image']?.files[0]?.file?.url || ''
  } catch (error) {
    console.warn('Failed to get cover image:', error)
    return ''
  }
}

const getNotionProperty = (post: any, propertyName: string): string => {
  console.log(propertyName, JSON.stringify(post))
  try {
    // Handle different property types
    const property = post.properties[propertyName]

    if (property.title) {
      return property.title[0]?.plain_text || ''
    }
    if (property.rich_text) {
      return property.rich_text[0]?.plain_text || ''
    }
    if (property.select) {
      return property.select?.name || ''
    }

    return ''
  } catch (error) {
    console.warn(`Failed to get property ${propertyName}:`, error)
    return ''
  }
}

const LatestNewsPage: React.FC = async () => {
  console.log('fetching blog posts')
  const blogPosts = (await fetchBlogPosts()).map((postObject) => {
    const post: any = {
      imageLink: getCoverImageUrl(postObject),
      title: getNotionProperty(postObject, 'Title'),
      summary: getNotionProperty(postObject, 'Summary'),
      date: postObject.properties.Date.date.start,
      blogPostLink: '/explore/news/' + postObject.id,
      author: getNotionProperty(postObject, 'Author'),
      featured: postObject.properties.Featured?.checkbox || false,
    }
    return post
  })

  const featuredPosts = blogPosts.filter((post) => post.featured).slice(0, 3)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  const fetchSummary = async (id: string) => {
    //TODO: add summary
    const page_id = blogPosts[0]['id'] as string
    const response = await notion.blocks.retrieve({
      block_id: id,
    })
    return response
  }

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <SubHero
        headline="Latest News & Insights"
        description="Explore insights, industry trends, and company updates from the world
          of recruitment, HR, and beyond."
        primaryButton="Read Our Blog"
        secondaryButton="Subscribe for Updates"
      />

      {/* Featured Post Section */}
      <FeaturedPosts posts={featuredPosts} />

      {/* Recent Posts Section */}
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

      {/* Newsletter Subscription Section */}
      <Newsletter />
    </div>
  )
}

export default LatestNewsPage
