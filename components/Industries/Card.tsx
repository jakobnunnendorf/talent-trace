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
  const x = `-${activeCard * 100}%` // Adjusted to use percentage

  return (
    <motion.article
      className="relative flex h-full w-full flex-shrink-0 items-center overflow-hidden rounded-3xl border shadow-2xl"
      initial={{ x }}
      animate={{ x }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      onClick={onClick}
    >
      <div className="absolute right-0 -z-10 hidden h-1/2 w-full border-l bg-slate-50 lg:block lg:h-full lg:w-1/2"></div>
      <div className="grid h-full w-full grid-rows-2 lg:grid-cols-2 lg:grid-rows-1">
        <LeftComponent />
        <RightComponent />
      </div>
    </motion.article>
  )
}
