import { Client } from '@notionhq/client'

const notion = new Client({ auth: process.env.NOTION_API_KEY })

// Database IDs
const NEWS_DATABASE_ID = '158c4d0ef10880d386f2c94c94a3600b'
const CATEGORIES_DATABASE_ID = '15bc4d0ef10880f79dbaff488bd59b06'
const COMPANIES_DATABASE_ID = '160c4d0ef10880779e39d0823c60af3f'

// Helper functions
export const getCoverImageUrl = (post: any): string => {
  try {
    return post.properties['Cover image']?.files[0]?.file?.url || ''
  } catch (error) {
    console.warn('Failed to get cover image:', error)
    return ''
  }
}

export const getNotionProperty = (post: any, propertyName: string): string => {
  try {
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

export const returnClassName = (blockType: string) => {
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

export const extractBlockContents = (blockArray: any) => {
  const blocks = blockArray.map((block: any) => {
    const blockType = block['type']
    const content = block[blockType].rich_text
      .map((element: any) => element.plain_text)
      .join('')
    return {
      type: blockType,
      content: content,
      className: returnClassName(blockType),
    }
  })
  return blocks
}

// Fetch functions
export const fetchNewsPost = async (pageId: string) => {
  const response = await notion.blocks.children.list({
    block_id: pageId,
    page_size: 50,
  })
  return response
}

export const fetchFeaturedNews = async () => {
  const response = await notion.databases.query({
    database_id: NEWS_DATABASE_ID,
    filter: {
      property: 'Featured',
      checkbox: {
        equals: true,
      },
    },
    page_size: 4,
  })
  return response.results
}

export const fetchAllNews = async () => {
  const response = await notion.databases.query({
    database_id: NEWS_DATABASE_ID,
  })
  return response.results
}

export const fetchCategoryPage = async (pageId: string) => {
  const response = await notion.blocks.children.list({
    block_id: pageId,
    page_size: 50,
  })
  return response
}

export const fetchCategory = async (categoryId: string) => {
  const response = await notion.databases.query({
    database_id: CATEGORIES_DATABASE_ID,
  })
  return response.results.filter((entry: any) => entry.id === categoryId)[0]
}

// Add these interfaces
export interface CategoryObject {
  categoryName: string
  icon: string
  image: string
  id: string
}

export interface NewsPost {
  imageLink: string
  title: string
  summary: string
  date: string
  blogPostLink: string
  author: string
  featured: boolean
}

// Add these functions
export const fetchCategories = async () => {
  const response = await notion.databases.query({
    database_id: CATEGORIES_DATABASE_ID,
  })

  return response.results.map((result: any) => ({
    categoryName: result.properties['Category'].title[0].plain_text,
    icon: result.properties['Icon']?.files[0]?.file?.url || '',
    image: result.properties['Image']?.files[0]?.file?.url || '',
    id: result.id,
  })) as CategoryObject[]
}

export const fetchAndFormatNews = async () => {
  const posts = await fetchAllNews()
  return posts.map((postObject: any) => ({
    imageLink: getCoverImageUrl(postObject),
    title: getNotionProperty(postObject, 'Title'),
    summary: getNotionProperty(postObject, 'Summary'),
    date: postObject.properties.Date.date.start,
    blogPostLink: '/explore/news/' + postObject.id,
    author: getNotionProperty(postObject, 'Author'),
    featured: postObject.properties.Featured?.checkbox || false,
  })) as NewsPost[]
}

interface Company {
  logo: string
  name: string
}

export const fetchCompanyLogos = async () => {
  const response = await notion.databases.query({
    database_id: COMPANIES_DATABASE_ID,
  })

  return response.results.map((result: any) => ({
    logo: result.properties['Logo']?.files[0]?.file?.url || '/',
    name: getNotionProperty(result, 'Name') // Assuming there's a Name property
  })) as Company[]
}

