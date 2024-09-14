import React from 'react'
import Image from 'next/image'

interface NewsImageProps {
  imageUrl: string
  headline: string
}

export function NewsImage({ imageUrl, headline }: NewsImageProps) {
  return (
    <figure className=" relative h-full w-full">
      <Image src={imageUrl} alt={headline} layout="fill" objectFit="cover" />
    </figure>
  )
}

interface NewsContentProps {
  headline: string
  introduction: string
  author: string
  date: string
  category: string
}

export function NewsContent({ headline, introduction, author, date, category }: NewsContentProps) {
  return (
    <div className="flex flex-col justify-center p-6 md:p-8">
      <h2 className="mb-2 text-2xl font-bold">{headline}</h2>
      <div className="mb-4 text-sm text-gray-500">
        <span>{author} | {date} | {category}</span>
      </div>
      <p className="text-gray-600">{introduction}</p>
    </div>
  )
}
