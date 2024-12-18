import React from 'react'
import {
  fetchNewsPost,
  getCoverImageUrl,
  extractBlockContents,
  fetchAllNews,
  fetchNewsById,
} from '@/lib/notion'
import Image from 'next/image'
import SubHero from '@/components/Header/SubHero'

export default async function Page({ params }: { params: { id: string } }) {
  const blogPost = await fetchNewsPost(params.id)
  const currentPost = await fetchNewsById(params.id)

  return (
    <div className="mx-auto md:w-1/2">
      <SubHero
        headline="Latest News"
        description="Stay informed with Talent Trace updates"
      />
      <h1 className="px-4 pb-4 pt-12 text-center text-3xl font-bold md:text-start md:text-5xl">
        Recruitment Trends in 2021
      </h1>
      <div className="w-full px-4 py-8">
        <figure className="relative h-96 w-full">
          <Image
            src={getCoverImageUrl(currentPost)}
            alt="Blog Post Image"
            fill
            className="rounded-lg object-cover"
          />
        </figure>
      </div>
      <div className="px-4">
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
