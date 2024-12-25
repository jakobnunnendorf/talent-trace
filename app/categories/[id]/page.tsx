import React from 'react'

import NotionPageContentBlocks from '@/components/Home/Categories/Page/NotionPageContentBlocks'
import { fetchCategoryByPageId } from '@/lib/notion'
import Keywords from '@/components/Home/Categories/Page/Keywords'
import CoverImage from '@/components/shared/Header/CoverImage'

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

  return (
    <div className="mx-auto px-4 md:w-1/2 md:px-0 lg:pb-8">
      <h1 className="pb-8 pt-16 text-center text-3xl font-bold md:pb-4 md:text-start md:text-5xl">
        {title}
      </h1>
      <CoverImage src={imageUrl} alt={`${title} Image`} />
      <NotionPageContentBlocks pageId={pageId} />
      <Keywords keywords={keywords} />
    </div>
  )
}
