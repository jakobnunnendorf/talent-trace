import React from 'react'
import Image from 'next/image'

export default function Background() {
  return (
    <figure className="drift-right absolute -z-50 h-[100vw] w-[150vw]">
      <Image src="/Hero-extended.png" alt="ocean background" fill />
    </figure>
  )
}
