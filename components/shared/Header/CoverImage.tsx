import React from 'react'
import Image from 'next/image'

export default function CoverImage({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="relative h-96 w-full">
      <Image src={src} alt={alt} fill className="rounded-lg object-cover" />
    </figure>
  )
}
