import React from 'react'
import TestimonialCarousel from './TestimonialCarousel'
import Header from './Header'
import { Client } from '@notionhq/client'

interface User {
  object: 'user'
  id: string
}

interface RichTextContent {
  type: 'text'
  text: {
    content: string
    link: null | string
  }
  annotations: {
    bold: boolean
    italic: boolean
    strikethrough: boolean
    underline: boolean
    code: boolean
    color: string
  }
  plain_text: string
  href: null | string
}

interface Properties {
  Title: {
    id: string
    type: 'rich_text'
    rich_text: RichTextContent[]
  }
  Text: {
    id: string
    type: 'rich_text'
    rich_text: RichTextContent[]
  }
  Company: {
    id: string
    type: 'rich_text'
    rich_text: RichTextContent[]
  }
  Review: {
    id: string
    type: 'number'
    number: number
  }
  Position: {
    id: string
    type: 'rich_text'
    rich_text: RichTextContent[]
  }
  Picture: {
    id: string
    type: 'files'
    files: any[]
  }
  Author: {
    id: string
    type: 'title'
    title: RichTextContent[]
  }
}

interface TestimonialPage {
  object: 'page'
  id: string
  created_time: string
  last_edited_time: string
  created_by: User
  last_edited_by: User
  cover: null
  icon: null
  parent: {
    type: 'database_id'
    database_id: string
  }
  archived: boolean
  in_trash: boolean
  properties: Properties
  url: string
  public_url: string
}

interface Response {
  object: 'list'
  results: TestimonialPage[]
  next_cursor: null | string
  has_more: boolean
  type: 'page_or_database'
  page_or_database: Record<string, never>
  request_id: string
}

export interface Testimonial {
  title: string
  text: string
  author: string
  position: string
}
// Initialize Notion Client
const notion = new Client({ auth: process.env.NOTION_API_KEY })

export default async function Testimonials() {
  const fetchTestimonials = async (): Promise<Testimonial[]> => {
    const databaseId = '158c4d0ef1088018abaac79fefdc4d06'
    const response = await notion.databases.query({
      database_id: databaseId,
    })

    const testimonials: Testimonial[] = response.results
      .map((testimonialEntry: any) => {
        // Narrow down the type of `testimonialEntry` to PageObjectResponse
        if (!('properties' in testimonialEntry)) {
          return null // Skip if properties do not exist
        }

        const testimonial: Testimonial = {
          title: testimonialEntry.properties.Title.rich_text[0].text.content,
          text: testimonialEntry.properties.Text.rich_text[0].text.content,
          author: testimonialEntry.properties.Author.title[0].text.content,
          position:
            testimonialEntry.properties.Position.rich_text[0].text.content,
        }
        return testimonial
      })
      .filter(Boolean) as Testimonial[] // Filter out null testimonials

    return testimonials
  }

  const testimonials = await fetchTestimonials()
  return (
    <div className="bg-[#FAFAFA] py-12 pt-12 md:h-[700px] md:py-16">
      <div className="mx-auto">
        <Header />
        <TestimonialCarousel testimonials={testimonials} />
      </div>
    </div>
  )
}
