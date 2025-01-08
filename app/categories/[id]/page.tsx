import React from 'react'

import NotionPageContentBlocks from '@/components/Home/Categories/Page/NotionPageContentBlocks'
import { fetchCategoryByPageId } from '@/lib/notion'
import Keywords from '@/components/Home/Categories/Page/Keywords'
import CoverImage from '@/components/shared/Header/CoverImage'
import Link from 'next/link'

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const pageId = (await params).id
  const category = await fetchCategoryByPageId(pageId)

  // Safely extract data with fallbacks
  const title =
    category?.properties?.Category?.title?.[0]?.plain_text || 'Untitled'
  const imageUrl =
    category?.properties?.Image?.files?.[0]?.file?.url ||
    '/placeholder-image.png' // Use a placeholder image if missing
  const keywords = category?.properties?.Keywords?.multi_select || []
  console.log(imageUrl)
  return (
    <div className="mx-auto px-4 md:w-1/2 md:px-0 lg:pb-8">
      <h1 className="pb-8 pt-16 text-center text-3xl font-bold md:pb-4 md:text-start md:text-5xl">
        {title}
      </h1>
      <CoverImage src={imageUrl} alt={`${title} Image ${imageUrl}`} />
      <NotionPageContentBlocks pageId={pageId} />
      <Keywords keywords={keywords} />
      <Link
        href='link="https://talent-trace.zohorecruit.com/forms/677184c20dcfb9044e43b5672ceb5e3530c617412e8922022dcc64355524d8f5"'
        className="mx-auto my-16 flex w-full flex-col justify-around rounded-xl bg-green py-4 md:my-8 md:w-4/5 md:flex-row md:py-8"
      >
        <h2 className="text-center text-2xl font-bold text-white">
          Ready to take the next step?
        </h2>
        <h2 className="text-center text-2xl font-bold text-white underline underline-offset-4">
          Apply now.
        </h2>
      </Link>
    </div>
  )
}
