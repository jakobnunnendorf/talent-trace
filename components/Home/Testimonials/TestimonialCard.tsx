import React from 'react'
import { motion } from 'framer-motion'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card'

interface TestimonialCardProps {
  testimonial: {
    title: string
    text: string
    author: string
    position: string
  }
  isActive: boolean
  onClick?: () => void
}

export default function TestimonialCard({
  testimonial,
  isActive,
  onClick,
}: TestimonialCardProps) {
  return (
    <motion.div
      layout
      animate={{
        scale: isActive ? 1 : 0.9,
        opacity: isActive ? 1 : 0.5,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <Card
        className="flex-shrink-0 cursor-pointer rounded-lg bg-white shadow-xl md:w-[430px]"
        onClick={onClick}
      >
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold text-blue">
            {testimonial.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="max-h-36 overflow-scroll">
          {testimonial.text.split('\n').map((line, index) => (
            <p key={index} className="font-sans text-sm text-gray-600">
              <br />
              {line}
            </p>
          ))}
        </CardContent>
        <CardFooter className="ml-8">
          <div>
            <p className="text-md font-medium">{testimonial.author}</p>
            <p className="text-sm text-gray-500">{testimonial.position}</p>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
