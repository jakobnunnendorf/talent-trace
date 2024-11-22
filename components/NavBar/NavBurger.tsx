import React from 'react'
import Image from 'next/image'

export default function NavBurger() {
  return (
    <button className="lg:hidden">
      <Image
        src="/navburger.png"
        height={50}
        width={50}
        alt="Navigation burger"
      />
    </button>
  )
}
