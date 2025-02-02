import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import NewsCard from '@/components/Explore/News/NewsCard'
import { fetchAllNews, getCoverImageUrl, getNotionProperty } from '@/lib/notion'

// Match the interface from FeaturedPosts
interface NewsItem {
  imageLink: string
  title: string
  summary: string
  date: string
  blogPostLink: string
  author: string
}

export default async function NewsCarousel() {
  const posts = await fetchAllNews()
  const newsItems: NewsItem[] = posts.map((post: any) => ({
    imageLink: getCoverImageUrl(post),
    title: getNotionProperty(post, 'Title'),
    summary: getNotionProperty(post, 'Summary'),
    date: getNotionProperty(post, 'Date'),
    blogPostLink: '/news/' + post.id,
    author: getNotionProperty(post, 'Author'),
  }))

  return (
    <section className="flex flex-col justify-center pb-12 md:py-24">
      <div className="mx-auto w-full md:w-4/5">
        <h2 className="pb-6 pt-12 text-center text-4xl md:pl-16 md:text-start">
          Latest News Stories
        </h2>
        <Carousel
          opts={{
            align: 'start',
          }}
          className=""
        >
          <CarouselContent className="px-4 pb-8 md:gap-4 md:p-16">
            {newsItems.map((item, index) => (
              <CarouselItem
                key={index}
                className="overflow-visible md:basis-1/2 lg:basis-1/2"
              >
                <NewsCard
                  imageLink={item.imageLink}
                  title={item.title}
                  summary={item.summary}
                  date={item.date}
                  blogPostLink={item.blogPostLink}
                  author={item.author}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2" />
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2" />
        </Carousel>
      </div>
    </section>
  )
}
