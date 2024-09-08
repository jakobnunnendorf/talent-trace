import React from 'react'
import Animation from './Animation'
import Text from './Text'
import Image from 'next/image'

export default function Card() {
  return (
    <article className="relative flex h-full w-[80vw] flex-shrink-0 items-center overflow-hidden rounded-3xl  shadow-2xl">
      <div className="absolute z-20 h-full w-full bg-black opacity-20"></div>
      <figure className="gborder relative right-32 h-full w-[195%]">
        <Image
          className="object-contain"
          src="/shipping-container.jpeg"
          fill
          alt="Shipping container"
        />
      </figure>
      <h2 className="absolute z-30 px-16 font-sans text-7xl font-bold text-white">
        Shipping Container Shortage and the Problems in Maritime Logistics
      </h2>
    </article>
  )
}
