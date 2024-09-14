import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Text() {
  return (
    <div className="gborder flex h-full w-full flex-col gap-16 py-20 font-sans">
      <div className="h-fit">
        <h2 className="mb-3 w-full text-center text-4xl font-semibold leading-tight">
          Popular Industries.
          <br />
          Across the Board.
        </h2>
        <p className="text-center text-2xl text-[#696969]">
          We find the right match between
          <br /> skillset and job requirement.
        </p>
      </div>
      <Link href="/" className="h-fit">
        <div className="flex justify-center gap-2.5">
          <p className="text-center text-2xl text-[#1098EF] underline">
            submit talent requisition
          </p>
          <Image
            src="/right-arrow.png"
            height={30}
            width={30}
            alt="right arrow"
          />
        </div>
      </Link>
    </div>
  )
}
