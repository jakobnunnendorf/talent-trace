import React from 'react'
import { Client } from '@notionhq/client'
import Image from 'next/image'

const notion = new Client({ auth: process.env.NOTION_API_KEY })

const fetchBlogPosts = async (pageId: string) => {
  const response = await notion.blocks.children.list({
    block_id: pageId,
    page_size: 50,
  })
  return response
}

const returnClassName = (blockType: string) => {
  switch (blockType) {
    case 'heading_1':
      return 'text-5xl font-bold pt-8 pb-4'
    case 'heading_2':
      return 'text-4xl font-bold pt-8 pb-4'
    case 'heading_3':
      return 'text-3xl font-bold pt-8 pb-4'
    case 'heading_4':
      return 'text-2xl font-bold pt-8 pb-4'
    case 'paragraph':
      return 'text-xl pt-3'
  }
}

const extractBlockContents = (blockArray: any) => {
  const blocks = blockArray.map((block: any) => {
    const blockType = block['type']
    const content = block[blockType].rich_text
      .map((element: any) => {
        return element.plain_text
      })
      .join('')
    return {
      type: blockType,
      content: content,
      className: returnClassName(blockType),
    }
  })
  return blocks
}

const getCoverImageUrl = (post: any): string => {
  try {
    return post.properties['Cover image']?.files[0]?.file?.url || ''
  } catch (error) {
    console.warn('Failed to get cover image:', error)
    return ''
  }
}

export default async function Page({ params }: { params: { id: string } }) {
  const blogPost = await fetchBlogPosts(params.id)
  const databaseId = '158c4d0ef10880d386f2c94c94a3600b'
  const response = await notion.databases.query({
    database_id: databaseId,
  })

  return (
    <div className="mx-auto w-1/2 py-48">
      <h1 className="pb-4 text-5xl font-bold">Talent Trace Blog</h1>
      <h2 className="pb-8 text-2xl font-bold">
        Keep up to date with the latest news and insights
      </h2>
      <figure className="relative h-96 w-full">
        <Image
          src={getCoverImageUrl(
            response.results.filter((entry: any) => entry.id === params.id)[0]
          )}
          alt="Blog Post Image"
          fill
          className="object-cover"
        />
      </figure>
      <div>
        {extractBlockContents(blogPost.results).map(
          (block: any, index: number) => {
            return (
              <div key={index} className={block.className}>
                {block.content}
              </div>
            )
          }
        )}
      </div>
    </div>
  )
}
