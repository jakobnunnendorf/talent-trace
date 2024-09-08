'use client'

import React, { useRef, useState } from 'react'
import { motion, useTransform, useScroll, px } from 'framer-motion'
import Card from './Card'
import Card2 from './Card2'
import Slider from './Slider'

export default function Industries() {
  const [activeCard, setActiveCard] = useState(0)
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 0.3', 'center start'],
  })
  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.7, 1],
    [0.5, 1, 1, 1, 0.5]
  )
  const slideUp = useTransform(scrollYProgress, [0, 0.3, 1], [150, -100, -100])

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center overflow-hidden">
      <motion.h2 className="text-3xl" style={{ translateY: slideUp }}>
        The right expertise for your recruitment needs
      </motion.h2>
      <motion.div
        ref={ref}
        className="my-auto flex h-[88%] w-[93%] flex-col items-center gap-8"
        style={{ scale: scale }}
      >
        <motion.ul
          drag
          dragConstraints={{
            right: -50,
            left: -50,
            top: 0,
            bottom: 0,
          }}
          className="flex h-full w-[80vw] gap-8"
        >
          <Card />
          <Card2 />
        </motion.ul>
        <Slider activeCard={activeCard} setActiveCard={setActiveCard} />
      </motion.div>
    </div>
  )
}
