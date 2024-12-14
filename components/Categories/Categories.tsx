import React from 'react'
import CategoryIcon from './CategoryIcon'
import { Client } from '@notionhq/client'

const notion = new Client({ auth: process.env.NOTION_API_KEY })

// const categories = [
//   {
//     src: '/categories/Commodity icon.png',
//     alt: 'Commodity Trading icon',
//     text: 'Commodity Trading',
//   },
//   {
//     src: '/categories/shipping icon.png',
//     alt: 'Shipping icon',
//     text: 'Shipping',
//   },
//   {
//     src: '/categories/Supply chain icon.png',
//     alt: 'Supply Chain icon',
//     text: 'Supply Chain & Procurement',
//   },
//   {
//     src: '/categories/robot icon.png',
//     alt: 'Robotics icon',
//     text: 'Robotics',
//   },
//   {
//     src: '/categories/IT Icon.png',
//     alt: 'IT icon',
//     text: 'Information Technology',
//   },
//   {
//     src: '/categories/Health icon.png',
//     alt: 'Healthcare icon',
//     text: 'Healthcare',
//   },
//   {
//     src: '/categories/Pharma icon.png',
//     alt: 'Pharmaceutical icon',
//     text: 'Pharmaceutical',
//   },
//   {
//     src: '/categories/Law icon.png',
//     alt: 'Legal icon',
//     text: 'Legal & Compliance',
//   },
//   {
//     src: '/categories/Energy icon.png',
//     alt: 'Energy icon',
//     text: 'Energy & Renewable',
//   },
//   {
//     src: '/categories/Media icon.png',
//     alt: 'Media icon',
//     text: 'Media & Advertising',
//   },
//   {
//     src: '/categories/Commodity icon.png',
//     alt: 'Other industries icon',
//     text: 'Others',
//   },
// ]

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
  const response = await fetchCategories()

  // Make sure results is an array before mapping
  const categoryObjects = Array.isArray(response.results)
    ? response.results.map((result) => ({
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
        {categoryObjects.map((category, index) => (
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
