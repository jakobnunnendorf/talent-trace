import React from 'react'
import Image from 'next/image'
import SubHero from '@/components/Header/SubHero'
import {
  fetchCategoryPage,
  extractBlockContents,
  fetchCategoryByPageId,
} from '@/lib/notion'

export default async function Page({ params }: { params: { id: string } }) {
  const category = await fetchCategoryByPageId(params.id)
  const blogPost = await fetchCategoryPage(params.id)

  return (
    <section>
      <SubHero
        headline={'Find the best jobs in your industry'}
        description="with Talent Trace"
      />
      <div className="mx-auto px-4 md:w-1/2 md:px-0">
        <h1 className="pb-8 pt-16 text-center text-3xl font-bold md:pb-4 md:text-start md:text-5xl">
          {category.properties.Category.title[0].plain_text}
        </h1>
        <figure className="relative h-96 w-full">
          <Image
            src={category.properties.Image.files[0].file.url}
            alt="Blog Post Image"
            fill
            className="rounded-lg object-cover"
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
        <div className="grid w-full grid-cols-3 items-center justify-center gap-8 py-8 md:flex md:justify-start md:gap-8 md:pb-24 md:pt-12">
          <p className="col-span-3 font-bold">Keywords: &nbsp;</p>
          {category.properties.Keywords.multi_select.map((keyword: any) => {
            return keyword.name
          })}
        </div>
      </div>
    </section>
  )
}
