import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function NewsCard({
  imageLink,
  title,
  summary,
  date,
  blogPostLink,
  author,
}: {
  imageLink: string
  title: string
  summary: string
  date: string
  blogPostLink: string
  author: string
}) {
  return (
    <div className="grid h-96 grid-rows-4 overflow-hidden rounded bg-white shadow-lg lg:aspect-[12/9] lg:h-auto lg:grid-rows-3">
      <figure className="relative row-span-2 h-full">
        <Image
          src={imageLink}
          alt={imageLink}
          fill
          className="w-full object-cover"
        />
      </figure>
      <div className="p-4">
        <h3 className="text-xl font-bold">
          <Link href={blogPostLink}>{title}</Link>
        </h3>
        <p className="mt-2 text-sm text-gray-600">{summary}</p>
        <p className="mt-2 text-xs text-gray-500">
          {' '}
          Published on {date} by {author}
        </p>
        <Link
          href={blogPostLink}
          className="mt-4 inline-block font-semibold text-blue underline"
        >
          Read More
        </Link>
      </div>
    </div>
  )
}
