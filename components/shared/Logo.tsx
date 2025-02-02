import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface LogoProps {
  scrollDirection?: 'up' | 'down'
}

export default function Logo({ scrollDirection }: LogoProps) {
  return (
    <Link href="/">
      <div
        className={`transition-all duration-700 ease-in-out ${
          scrollDirection === 'up'
            ? 'relative mr-auto w-36 md:w-48'
            : 'border-blue md:w-64 md:scale-150 md:rounded-l-full md:border-r-0 md:px-12'
        } h-14`}
      >
        <div
          className={`h-48 ${
            scrollDirection === 'up'
              ? 'absolute md:w-full'
              : 'md:mx-auto md:w-36'
          }`}
        >
          <Image
            src="/logos/Talent Trace logo.png"
            alt="Talent Trace Logo"
            height={500}
            width={500}
          />
        </div>
      </div>
    </Link>
  )
}
