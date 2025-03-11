import React, { Suspense } from 'react'
import LogoBanner from '@/components/Home/Companies/LogoBanner'
import LogoBannerSkeletons from './LogoBannerSkeletons'

export const revalidate = 3000

export default function Companies() {
  return (
    <div className="pt-12 text-center md:grid md:grid-rows-5 md:pt-0">
      <div className="row-start-2">
        <h2 className="text-3xl">Top Companies hiring at Talent Trace</h2>
        <h4 className="text-md mt-1 py-4 text-gray-500 md:py-0">
          We have longstanding business relations with
        </h4>
      </div>
      <Suspense fallback={<LogoBannerSkeletons />}>
        <LogoBanner />
      </Suspense>
    </div>
  )
}
