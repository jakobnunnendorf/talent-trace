import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Logo() {
  return (
    <Link href="/">
      <div className="py-2">
        <Image
          src="/logos/Talent Trace logo.png"
          alt="Talent Trace Logo"
          height={170}
          width={170}
        />
      </div>
    </Link>
  )
}
