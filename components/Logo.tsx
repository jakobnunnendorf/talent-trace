import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface LogoProps {
  scrollDirection: 'up' | 'down'
}

export default function Logo({ scrollDirection }: LogoProps) {
  return (
    <Link href="/" className="">
      <div
        className={`relative transition-all duration-700 ease-in-out ${
          scrollDirection === 'up'
            ? 'mx-auto w-32'
            : 'ml-auto w-64 scale-150 rounded-l-full border-r-0 border-blue px-12'
        } h-14`}
      >
        <div
          className={`relative h-full ${
            scrollDirection === 'up' ? 'w-full' : 'mx-auto w-24'
          }`}
        >
          <Image
            src="/Talent Trace logo.png"
            alt="Mysterious client Logo"
            fill
            className="rounded-md object-contain"
          />
        </div>
      </div>
    </Link>
  )
}
