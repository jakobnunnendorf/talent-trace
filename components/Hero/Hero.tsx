import React from 'react'
import Background from './Background'
import Ship from './Ship'
import Headline from './Headline'
import ClientName from './ClientName'
import CompanyBanner from './CompanyBanner'

export default function Hero() {
  return (
    <div className="relative grid h-screen w-full grid-rows-5 overflow-hidden text-white">
      <Background />
      <Ship />
      <CompanyBanner />
      <div className="row-span-2 row-start-3 mx-auto grid w-4/5">
        <div className="grid w-fit grid-rows-5">
          <ClientName />
          <Headline />
          <div className="row-span-1 row-start-4 flex items-center gap-4">
            <div className="h-fit w-fit border bg-white px-5 py-3">
              <span className="text-black">Search Jobs</span>
            </div>
            <div className="h-fit w-fit border px-5 py-3">Find Talent</div>
          </div>
        </div>
      </div>
    </div>
  )
}
