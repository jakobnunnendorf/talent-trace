import React from 'react'
import Link from 'next/link'

export default function HeroContent() {
  return (
    <div className="rborder text-white md:row-span-2 md:row-start-3 md:grid">
      <p className="row-span-1 h-fit w-fit self-end text-lg font-bold">
        Talent Trace
      </p>
      <h2 className="row-span-2 row-start-2 w-fit font-sans text-5xl font-bold text-[#41ADF2] md:text-6xl">
        Tracing Talent
        <br />
        <span className="text-[#9FDC77]">Paving Careers</span>
      </h2>
      <div className="my-8 flex items-center gap-4 text-white md:row-span-1 md:row-start-4">
        <Link href="/jobs" className="h-fit w-fit border bg-white px-5 py-3">
          <span className="text-black">Search Jobs</span>
        </Link>
        <Link href="/talent" className="h-fit w-fit border px-5 py-3">
          Find Talent
        </Link>
      </div>
    </div>
  )
}
