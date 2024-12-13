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
    <div className="overflow-hidden rounded bg-white shadow-lg">
      <Image
        src={imageLink}
        alt={imageLink}
        width={500}
        height={500}
        className="h-48 w-full object-cover"
      />
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
