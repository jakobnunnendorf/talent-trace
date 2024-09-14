'use client'

import React, { useState, useRef } from 'react'
import { motion, PanInfo } from 'framer-motion'
import TestimonialCard from './TestimonialCard'
import Slider from '../Industries/Slider'

const testimonials = [
  {
    title: 'Excellent Service',
    text: 'Talent Trace keeps going above and beyond to provide the most professional services possible. Not only are the candidates perfect but the process we go through is swift and smooth as well.',
    author: 'Nicole Wells',
    position: 'Chief of Staff',
  },
  {
    title: 'Convincing Expertise',
    text: 'We have been successfully working with Talent Trace for years. There is no recruitment firm with an equivalent grasp on the Marine Industry. They keep delivering and remain second to none.',
    author: 'Gabriel Nolan',
    position: 'HR Manager',
  },
  {
    title: 'Exclusive Recruiting Pool',
    text: 'Talent Trace consistently manages to tap into recruitment pools that had previously been off limits to us. The ability to source candidates from the industry leaders is impressive every time.',
    author: 'Ashley Jenkins',
    position: 'Designer',
  },
  {
    title: 'Excellent Service',
    text: 'Talent Trace keeps going above and beyond to provide the most professional services possible. Not only are the candidates perfect but the process we go through is swift and smooth as well.',
    author: 'Nicole Wells',
    position: 'Chief of Staff',
  },
  {
    title: 'Convincing Expertise',
    text: 'We have been successfully working with Talent Trace for years. There is no recruitment firm with an equivalent grasp on the Marine Industry. They keep delivering and remain second to none.',
    author: 'Gabriel Nolan',
    position: 'HR Manager',
  },
  {
    title: 'Exclusive Recruiting Pool',
    text: 'Talent Trace consistently manages to tap into recruitment pools that had previously been off limits to us. The ability to source candidates from the industry leaders is impressive every time.',
    author: 'Ashley Jenkins',
    position: 'Designer',
  },
]

export default function Testimonials() {
  const [activeCard, setActiveCard] = useState(1)  // Start with the second card active
  const containerRef = useRef<HTMLUListElement>(null)

  const handleCardClick = (index: number) => {
    setActiveCard(Math.min(Math.max(index, 1), testimonials.length - 2))
  }

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const threshold = 50
    const dragDistance = info.offset.x
    const dragDirection = dragDistance > 0 ? -1 : 1

    if (Math.abs(dragDistance) > threshold) {
      const newIndex = Math.min(
        Math.max(activeCard + dragDirection, 1),
        testimonials.length - 2
      )
      setActiveCard(newIndex)
    }
  }

  return (
    <div className="bg-white py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-semibold text-gray-900">
          Testimonials From Our Partners
        </h2>
        <p className="mb-8 mt-2 text-center text-sm text-gray-500">
          you are more than a client to us
        </p>
        <motion.div className="relative overflow-hidden">
          <motion.ul
            ref={containerRef}
            className="flex gap-8"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragEnd={handleDragEnd}
            animate={{ x: -(activeCard - 1) * 430 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                testimonial={testimonial}
                isActive={index >= activeCard - 1 && index < activeCard + 2}
                onClick={() => handleCardClick(index)}
              />
            ))}
          </motion.ul>
        </motion.div>
        <div className="mt-8 flex justify-center">
          <Slider
            activeCard={activeCard - 1}
            setActiveCard={(index) => setActiveCard(index + 1)}
            totalCards={testimonials.length - 2}
          />
        </div>
      </div>
    </div>
  )
}
