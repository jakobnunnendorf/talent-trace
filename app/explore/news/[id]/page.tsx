import React from 'react'
import {
  fetchNewsPost,
  getCoverImageUrl,
  extractBlockContents,
  fetchAllNews,
  fetchNewsById,
} from '@/lib/notion'
import Image from 'next/image'

export default async function Page({ params }: { params: { id: string } }) {
  const blogPost = await fetchNewsPost(params.id)
  const currentPost = await fetchNewsById(params.id)

  return (
    <div className="mx-auto w-1/2 py-48">
      <h1 className="pb-4 text-5xl font-bold">Talent Trace Blog</h1>
      <h2 className="pb-8 text-2xl font-bold">
        Keep up to date with the latest news and insights
      </h2>
      <figure className="relative h-96 w-full">
        <Image
          src={getCoverImageUrl(currentPost)}
          alt="Blog Post Image"
          fill
          className="object-cover"
        />
      </figure>
      <div>
        {extractBlockContents(blogPost.results).map(
          (block: any, index: number) => {
            return (
              <div key={index} className={block.className}>
                {block.content}
              </div>
            )
          }
        )}
      </div>
    </div>
  )
}
