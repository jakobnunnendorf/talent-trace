import React from 'react'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'

export default function TextAndPic({
  title,
  text,
  footer,
  image,
}: {
  title: string
  text: string[]
  footer: string
  image: string
}) {
  return (
    <div className="mx-auto grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-1">
      <Card className="order-2 row-span-2 flex flex-col justify-around rounded-r-none border-r-0 py-8 md:order-1">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent className="">
          {text.map((paragraph, index) => (
            <p key={index} className="pb-4">
              {paragraph}
            </p>
          ))}
        </CardContent>
        <CardFooter>
          <p className="font-bold">{footer}</p>
        </CardFooter>
      </Card>
      <figure className="relative order-1 h-full w-full md:order-2">
        <Image
          unoptimized
          src={image}
          alt={title}
          fill
          className="rounded-t-lg object-cover md:rounded-r-lg md:rounded-tl-none"
        />
      </figure>
    </div>
  )
}
