'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function Industries() {
  const [scrollProgress, setScrollProgress] = useState(0)

  // Handle scroll event
  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight
    const scrollPercent = scrollTop / maxScroll
    console.log(scrollPercent)
    setScrollProgress(scrollPercent)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Calculate the scale value based on scroll progress (e.g., scale from 1 to 1.5)
  const scaleValue = 0.5 + scrollProgress * 0.5 // Scale from 1 to 1.5

  return (
    <div className="flex h-screen w-full items-center justify-center border">
      <section
        className="my-auto flex h-[88%] w-[93%] items-center rounded-3xl border shadow-xl"
        style={{
          transform: `scale(${scaleValue})`,
        }}
      >
        <video
          src="/animation.mp4"
          width={700}
          height={700}
          autoPlay
          loop
          muted
        />
        <article className="">
          <h2 className="text-center text-4xl">
            Popular Industries.
            <br />
            Across the Board.
          </h2>
        </article>
      </section>
    </div>
  )
}
