'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function Ship() {
  const [scrollProgress, setScrollProgress] = useState(0)

  // Handle scroll event
  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight
    const scrollPercent = scrollTop / maxScroll
    setScrollProgress(scrollPercent)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Calculate the translateX and translateY values based on the scroll progress
  const translateX = 50 - scrollProgress * 120 // Horizontal movement (adjust for 140-degree angle)
  const translateY = 50 - scrollProgress * 150 // Vertical movement

  return (
    <figure
      className="absolute -z-40"
      style={{
        transform: `translate(${translateX}vw, ${translateY}vh)`,
      }}
    >
      <Image src="/ship.png" width={1440} height={968} alt="ship" />
    </figure>
  )
}
