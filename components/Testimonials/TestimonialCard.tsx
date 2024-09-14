import React from 'react'
import { motion } from 'framer-motion'

interface TestimonialCardProps {
  testimonial: {
    title: string
    text: string
    author: string
    position: string
  }
  isActive: boolean
  onClick: () => void
}

export default function TestimonialCard({
  testimonial,
  isActive,
  onClick,
}: TestimonialCardProps) {
  return (
    <motion.li
      className="flex-shrink-0 w-[430px] rounded-lg bg-gray-100 p-6 shadow cursor-pointer"
      onClick={onClick}
      layout
      animate={{
        scale: isActive ? 1 : 0.9,
        opacity: isActive ? 1 : 0.5,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <h3 className="text-lg font-semibold">{testimonial.title}</h3>
      <p className="mt-2 text-sm text-gray-600">{testimonial.text}</p>
      <p className="mt-4 text-sm font-semibold">{testimonial.author}</p>
      <p className="text-sm text-gray-500">{testimonial.position}</p>
    </motion.li>
  )
}
