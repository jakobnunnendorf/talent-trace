import React from 'react'
import TestimonialCarousel from './TestimonialCarousel'
import Header from './Header'
import { Client } from '@notionhq/client'

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
      .map((testimonialEntry) => {
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
    <div className="h-[700px] bg-[#FAFAFA] py-16">
      <div className="mx-auto">
        <Header />
        <TestimonialCarousel testimonials={testimonials} />
      </div>
    </div>
  )
}
