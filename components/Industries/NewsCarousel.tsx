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
import { Button } from '@/components/ui/button'

const newsItems = [
  {
    title: 'Shipping Container Shortage and the Problems in Maritime Logistics',
    image: '/news1.jpeg',
    description:
      'The COVID-19 pandemic brought about a number of disruptions to the global supply chain, affecting shipping and logistics.',
  },
  {
    title:
      'Labour Shortage Singapore & its Link to Rising Prices of Commodities',
    image: '/news2.jpg',
    description:
      'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a giant insect.',
  },
  {
    title: 'Recruitment Trends in 2021 for Hiring and Talent Acquisition',
    image: '/news3.png',
    description:
      'Recruitment trends in 2021 have evolved on a global scale, adapting to the challenges posed by the pandemic.',
  },
  {
    title: 'Employment in COVID-19: The Impact of Coronavirus in Singapore',
    image: '/news4.jpg',
    description:
      'Nearly 20,000 people lost their jobs in the first quarter of the pandemic, highlighting the urgent need for support.',
  },
]

export default function NewsCarousel() {
  return (
    <section className="flex justify-center py-24">
      <Carousel
        opts={{
          align: 'start',
        }}
        className="w-4/5"
      >
        <h2 className="pl-16 text-4xl">Latest News Stories</h2>
        <CarouselContent className="gap-4 p-16">
          {newsItems.map((item, index) => (
            <CarouselItem
              key={index}
              className="overflow-visible md:basis-1/2 lg:basis-1/2"
            >
              <div className="p-1">
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
                    <Button className="mx-auto bg-blue shadow-sm">
                      Read More
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}
