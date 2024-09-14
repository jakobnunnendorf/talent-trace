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
      className="w-[430px] flex-shrink-0 cursor-pointer rounded-lg bg-white p-6 shadow-xl"
      onClick={onClick}
      layout
      animate={{
        scale: isActive ? 1 : 0.9,
        opacity: isActive ? 1 : 0.5,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <h3 className="mt-6 text-lg font-semibold text-[#1098EF]">
        {testimonial.title}
      </h3>
      <p className="mt-2 font-sans text-sm text-gray-600">{testimonial.text}</p>
      <div className="ml-8">
        <p className="text-md mt-4 font-medium">{testimonial.author}</p>
        <p className="text-sm text-gray-500">{testimonial.position}</p>
      </div>
    </motion.li>
  )
}
