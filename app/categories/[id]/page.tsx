import React from 'react'
import { Client } from '@notionhq/client'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const notion = new Client({ auth: process.env.NOTION_API_KEY })

const fetchCategoryPage = async (pageId: string) => {
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

export default async function Page({ params }: { params: { id: string } }) {
  const blogPost = await fetchCategoryPage(params.id)
  const databaseId = '15bc4d0ef10880f79dbaff488bd59b06'
  const response = await notion.databases.query({
    database_id: databaseId,
  })

  return (
    <div className="mx-auto w-1/2 py-48">
      <h1 className="pb-4 text-5xl font-bold">
        Find the best jobs in{' '}
        {
          response.results.filter((entry: any) => entry.id === params.id)[0]
            .properties.Category.title[0].plain_text
        }
      </h1>
      <figure className="relative h-96 w-full">
        <Image
          src={
            response.results.filter((entry) => {
              return entry.id === params.id
            })[0].properties.Image.files[0].file.url
          }
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
      <div className="flex w-full justify-center gap-24 pt-24">
        {response.results
          .filter((entry) => entry.id === params.id)[0]
          .properties.Keywords.multi_select.map((keyword: any) => {
            return keyword.name
          })
          .map((keyword) => {
            return <Button key={keyword}>{keyword}</Button>
          })}
      </div>
    </div>
  )
}
