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
            ? 'mx-auto md:w-32'
            : 'border-blue md:ml-auto md:w-64 md:scale-150 md:rounded-l-full md:border-r-0 md:px-12'
        } h-14`}
      >
        <div
          className={`relative h-full ${
            scrollDirection === 'up' ? 'md:w-full' : 'md:mx-auto md:w-24'
          }`}
        >
          <Image
            src="/logos/Talent Trace logo.png"
            alt="Talent Trace Logo"
            fill
            className="rounded-md object-contain"
          />
        </div>
      </div>
    </Link>
  )
}
