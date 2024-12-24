import MainButton from '@/components/shared/Buttons/MainButton'
import { Button } from '@/components/ui/button'
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
    <div className="grid h-96 grid-rows-6 overflow-hidden rounded-xl bg-white shadow-lg lg:h-[420px] lg:grid-rows-5">
      <figure className="relative row-span-3">
        <Image
          src={imageLink}
          alt={imageLink}
          fill
          className="w-full object-cover"
        />
      </figure>
      <div className="row-span-2 grid grid-rows-4 p-4">
        <div className="row-span-3">
          <h3 className="line-clamp-2 text-xl font-bold">
            <Link href={blogPostLink}>{title}</Link>
          </h3>
          <p className="mt-2 text-xs text-gray-500">
            {' '}
            Published on {date} by {author}
          </p>
        </div>
        {/* <p className="mt-2 text-sm text-gray-600">{summary}</p> */}
        <div className="">
          <MainButton
            buttonText="Read More"
            link={blogPostLink}
            className="w-1/3 border-none bg-blue"
          />
        </div>
      </div>
    </div>
  )
}
