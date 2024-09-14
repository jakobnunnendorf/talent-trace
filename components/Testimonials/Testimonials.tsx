'use client'

import React from 'react'
import TestimonialCarousel from './TestimonialCarousel'
import Header from './Header'

export default function Testimonials() {
  return (
    <div className="h-[700px] bg-[#FAFAFA] py-16">
      <div className="mx-auto">
        <Header />
        <TestimonialCarousel />
      </div>
    </div>
  )
}
