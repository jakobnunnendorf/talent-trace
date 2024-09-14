import React from 'react'
import Image from 'next/image'

export default function Background() {
  return (
    <figure className="drift-right absolute -z-50 h-full w-[150vh] md:w-[150vw]">
      <Image src="/Hero-extended.png" alt="ocean background" fill />
    </figure>
  )
}
