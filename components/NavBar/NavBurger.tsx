'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import { useSidebar } from '@/components/ui/sidebar'
import { AspectRatio } from '@/components/ui/aspect-ratio'
interface NavBurgerProps {
  scrollDirection: 'up' | 'down'
}

export default function NavBurger({ scrollDirection }: NavBurgerProps) {
  const { openMobile, toggleSidebar } = useSidebar()

  return (
    <Button
      onClick={toggleSidebar}
      className={`h-12 w-12 transform-gpu gap-0 rounded-full bg-blue p-2 transition-all duration-500 ease-in-out ${
        openMobile
          ? 'invisible scale-0 opacity-0'
          : 'visible scale-100 opacity-100'
      }`}
    >
      <figure className="relative h-full w-full">
        <Image
          src="/icons/navburger.png"
          fill
          alt="Navigation burger"
          className="object-contain"
        />
      </figure>
    </Button>
  )
}
