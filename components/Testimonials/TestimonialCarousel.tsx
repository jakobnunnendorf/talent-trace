import React, { useRef, useState } from 'react'
import { motion, PanInfo } from 'framer-motion'
import TestimonialCard from './TestimonialCard'
import Slider from '../Industries/Slider'
import testimonials from './testimonialData'

export interface Testimonial {
  title: string
  text: string
  author: string
  position: string
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
  activeCard: number
  handleCardClick: (index: number) => void
  handleDragEnd: (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => void
}

const TestimonialCarousel: React.FC = () => {
  const containerRef = useRef<HTMLUListElement>(null)

  const [activeCard, setActiveCard] = useState(1)

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
    <div>
      <motion.div className="relative overflow-hidden">
        <motion.ul
          ref={containerRef}
          className="flex h-96 gap-8 py-12"
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
              isActive={index === activeCard}
              onClick={() => handleCardClick(index)}
            />
          ))}
        </motion.ul>
      </motion.div>
      <div className="flex justify-center">
        <Slider
          activeCard={activeCard - 1}
          setActiveCard={(index) => setActiveCard(index + 1)}
          totalCards={testimonials.length - 2}
        />
      </div>
    </div>
  )
}
export default TestimonialCarousel
