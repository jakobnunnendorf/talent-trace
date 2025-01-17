'use client'

import * as React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from '@/components/ui/carousel'
import Slider from '../Industries/Slider'
import TestimonialCard from './TestimonialCard'

export interface Testimonial {
  title: string
  text: string
  author: string
  position: string
}

const TestimonialCarousel: React.FC<{ testimonials: Testimonial[] }> = ({
  testimonials,
}) => {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) return

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const handleSelect = (index: number) => {
    api?.scrollTo(index)
  }

  return (
    <div className="relative md:px-16">
      <Carousel
        opts={{
          align: 'center',
          startIndex: current,
          loop: true,
        }}
        className="relative overflow-hidden"
        setApi={setApi}
      >
        <CarouselContent className="md:h-96 md:py-12">
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-[430px]">
              <div
                className={`cursor-pointer transition-all duration-300 ${
                  index === current ? 'scale-105' : 'scale-95 opacity-50'
                }`}
                onClick={() => handleSelect(index)}
              >
                <Card className="border-none bg-transparent shadow-none">
                  <CardContent className="md:p-6">
                    <TestimonialCard
                      testimonial={testimonial}
                      isActive={index === current}
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2" />
        <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2" />
      </Carousel>
      <div className="flex justify-center">
        <Slider
          activeCard={current}
          setActiveCard={handleSelect}
          totalCards={testimonials.length}
        />
      </div>
    </div>
  )
}

export default TestimonialCarousel
