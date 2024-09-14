import React from 'react'
import { motion } from 'framer-motion'

interface CardProps {
  LeftComponent: React.ComponentType
  RightComponent: React.ComponentType
  activeCard: number
  onClick: () => void
}

export default function Card({
  LeftComponent,
  RightComponent,
  activeCard,
  onClick,
}: CardProps) {
  const width = 80
  const x = -1 * activeCard * width
  const animation = `calc(${x}vw - ${activeCard * 32}px)`
  return (
    <motion.article
      className="relative flex h-full w-[80vw] flex-shrink-0 items-center overflow-hidden rounded-3xl border shadow-2xl"
      initial={{ x: `${x}vw` }}
      animate={{ x: animation }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="absolute right-0 -z-10 h-full w-1/2 border-l bg-slate-50"></div>
      <div className="grid h-fit w-full grid-cols-2">
        <LeftComponent />
        <RightComponent />
      </div>
    </motion.article>
  )
}
