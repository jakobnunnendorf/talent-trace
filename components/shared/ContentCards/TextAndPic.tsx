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
  text: string
  footer: string
  image: string
}) {
  const paragraphs = text.split('\n\n').map((p) => p.trim())

  return (
    <div className="mx-auto grid h-full w-full grid-cols-1 md:grid-cols-2">
      <Card className="flex flex-col justify-around rounded-r-none border-r-0 py-8">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent className="">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="pb-4">
              {paragraph}
            </p>
          ))}
        </CardContent>
        <CardFooter>
          <p className="font-bold">{footer}</p>
        </CardFooter>
      </Card>
      <figure className="relative h-full w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="rounded-r-lg object-cover"
        />
      </figure>
    </div>
  )
}
