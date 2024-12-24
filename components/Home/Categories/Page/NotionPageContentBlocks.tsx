import React from 'react'
import { extractBlockContents, fetchCategoryPage } from '@/lib/notion'

export default async function NotionPageContentBlocks({
  pageId,
}: {
  pageId: string
}) {
  const blogPost = await fetchCategoryPage(pageId)

  return (
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
  )
}
