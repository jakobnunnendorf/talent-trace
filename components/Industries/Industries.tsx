'use client'

import React, { useRef, useState } from 'react'
import { motion, useTransform, useScroll, PanInfo } from 'framer-motion'
import Card from './Card'
import Slider from './Slider'
import Animation from './Animation'
import Text from './Text'

const cardData = [
  { LeftComponent: Animation, RightComponent: Text },
  { LeftComponent: Animation, RightComponent: Text },
  { LeftComponent: Animation, RightComponent: Text },
  { LeftComponent: Animation, RightComponent: Text },
  { LeftComponent: Animation, RightComponent: Text },
]

export default function Industries() {
  const [activeCard, setActiveCard] = useState(0)
  const ref = useRef(null)
  const containerRef = useRef<HTMLUListElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 0.3', 'center start'],
  })

  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.5, 1, 1, 0.5]
  )
  const slideUp = useTransform(scrollYProgress, [0, 0.3, 1], [150, -100, -100])

  const handleCardClick = (index: number) => {
    setActiveCard(index)
  }

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const container = containerRef.current
    if (!container) return

    const threshold = container.offsetWidth * 0.2
    const dragDistance = info.offset.x
    const dragDirection = dragDistance > 0 ? -1 : 1

    if (Math.abs(dragDistance) > threshold) {
      const newIndex = Math.max(
        0,
        Math.min(cardData.length - 1, activeCard + dragDirection)
      )
      setActiveCard(newIndex)
    }
  }

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center overflow-hidden">
      <motion.h2 className="text-3xl" style={{ translateY: slideUp }}>
        The right expertise for your recruitment needs
      </motion.h2>
      <motion.div
        ref={ref}
        className="my-auto flex h-[88%] w-[93%] flex-col items-center gap-8"
        style={{ scale }}
      >
        <motion.ul
          ref={containerRef}
          className="relative flex h-full w-[80vw] touch-pan-y gap-8"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.1}
          onDragEnd={handleDragEnd}
        >
          {cardData.map((card, index) => (
            <Card
              key={index}
              {...card}
              activeCard={activeCard}
              onClick={() => handleCardClick(index)}
            />
          ))}
        </motion.ul>
        <Slider
          activeCard={activeCard}
          setActiveCard={setActiveCard}
          totalCards={cardData.length}
        />
      </motion.div>
    </div>
  )
}
