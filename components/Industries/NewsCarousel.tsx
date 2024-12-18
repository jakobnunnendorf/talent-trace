import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import Image from 'next/image'
import Link from 'next/link'
import MainButton from '../Buttons/MainButton'
import {
  fetchFeaturedNews,
  getCoverImageUrl,
  getNotionProperty,
} from '@/lib/notion'

export default async function NewsCarousel() {
  const posts = await fetchFeaturedNews()
  const newsItems = posts.map((post: any) => ({
    title: getNotionProperty(post, 'Title'),
    image: getCoverImageUrl(post),
    description: getNotionProperty(post, 'Summary'),
    link: '/explore/news/' + post.id,
  }))

  return (
    <section className="flex flex-col justify-center md:py-24">
      <h2 className="pb-6 pt-12 text-center text-4xl md:pl-16 md:text-start">
        Latest News Stories
      </h2>
      <Carousel
        opts={{
          align: 'start',
        }}
        className="w-full md:w-4/5"
      >
        <CarouselContent className="px-4 md:gap-4 md:p-16">
          {newsItems.map((item, index) => (
            <CarouselItem
              key={index}
              className="overflow-visible md:basis-1/2 lg:basis-1/2"
            >
              <div className="md:p-1">
                <Card className="shadow-xl">
                  <CardHeader>
                    <h2 className="text-3xl">{item.title}</h2>
                  </CardHeader>
                  <CardContent className="p-6">
                    <AspectRatio ratio={16 / 9} className="bg-muted">
                      <Image
                        src={item.image}
                        alt={`Photo for ${item.title}`}
                        fill
                        className="h-full w-full rounded-md object-cover"
                      />
                    </AspectRatio>
                    <p>{item.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Link href={item.link} className="mx-auto">
                      <MainButton buttonText="Read More" />
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2" />
        <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2" />
      </Carousel>
    </section>
  )
}
