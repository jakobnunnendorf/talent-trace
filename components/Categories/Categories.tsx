import React from 'react'
import CategoryIcon from './CategoryIcon'
import { Client } from '@notionhq/client'

// TODO: add correct typing

const notion = new Client({ auth: process.env.NOTION_API_KEY })

const getImageURL = (post: any, IconOrImage: string): string => {
  try {
    return post.properties[IconOrImage]?.files[0]?.file?.url || ''
  } catch (error) {
    console.warn('Failed to get image:', error)
    return ''
  }
}

const fetchCategories = async (): Promise<string[]> => {
  const databaseId = '15bc4d0ef10880f79dbaff488bd59b06'
  const response = await notion.databases.query({
    database_id: databaseId,
  })
  return response as any
}

export default async function Categories() {
  const response = (await fetchCategories()) as any

  // Make sure results is an array before mapping
  const categoryObjects = Array.isArray(response.results)
    ? response.results.map((result: any) => ({
        categoryName: result.properties['Category'].title[0].plain_text,
        icon: getImageURL(result, 'Icon'),
        image: getImageURL(result, 'Image'),
        id: result.id,
      }))
    : []

  return (
    <section className="py-12 md:p-24">
      <h2 className="p-6 pb-12 text-center text-4xl">
        Find jobs in your industry
      </h2>
      <ul className="mx-auto grid w-fit grid-cols-2 grid-rows-4 px-4 md:grid-cols-3 md:gap-x-32 md:gap-y-4">
        {categoryObjects.map((category: any, index: any) => (
          <CategoryIcon
            key={index}
            icon={category.icon}
            categoryName={category.categoryName}
            image={category.image}
            href={`/categories/${category.id}`}
          />
        ))}
      </ul>
    </section>
  )
}
