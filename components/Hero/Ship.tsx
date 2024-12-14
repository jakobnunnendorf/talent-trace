'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Ship() {
  const { scrollYProgress } = useScroll()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768) // Adjust this breakpoint as needed
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Position ranges
  const mobileXRange = ['45vw', '-120vw']
  const mobileYRange = ['60vw', '-160vw']
  const desktopXRange = ['80vh', '-70vh']
  const desktopYRange = ['50vh', '-43.75vh']

  // Map scroll progress to translateX and translateY values
  const translateX = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? mobileXRange : desktopXRange
  )
  const translateY = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? mobileYRange : desktopYRange
  )

  return (
    <motion.figure
      className="absolute -z-40"
      style={{
        x: translateX,
        y: translateY,
      }}
    >
      <Image
        src="/stock-images/ship.png"
        width={1440}
        height={968}
        alt="ship"
      />
    </motion.figure>
  )
}
