'use client'

import React, { useEffect, useState } from 'react'
import Logo from '../../shared/Logo'
import NavLinks from './NavLinks'
import NavBurger from './NavBurger'
import { useSidebar } from '@/components/ui/sidebar'

export default function NavBar() {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up')
  const [lastScrollY, setLastScrollY] = useState(0)
  const { isMobile } = useSidebar()
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const scrollThreshold = 20

      if (Math.abs(currentScrollY - lastScrollY) < scrollThreshold) return

      if (currentScrollY > lastScrollY) {
        setScrollDirection('down')
      } else {
        setScrollDirection('up')
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header
      className={`z-50 w-full ${scrollDirection === 'down' ? 'grid-cols-1' : 'grid grid-cols-2 bg-white/10 backdrop-blur-2xl md:bg-transparent md:backdrop-blur-0'} items-center px-8 py-4 md:grid-cols-4 md:py-7`}
    >
      <div
        className={`flex transform items-center transition-all duration-700 ease-in-out md:col-start-2 ${
          scrollDirection === 'down'
            ? 'fixed right-1/2 top-12 hidden w-fit translate-x-1/2 md:block'
            : 'translate-x-0 gap-4'
        }`}
      >
        <Logo scrollDirection={scrollDirection} />
      </div>
      <div className="hidden justify-center lg:flex">
        <NavLinks scrollDirection={scrollDirection} />
      </div>
      <div
        className={`flex h-full transform items-center justify-center transition-all duration-700 ease-in-out md:block ${
          scrollDirection === 'down' ? 'md:-translate-x-1/2' : 'translate-x-0'
        }`}
      >
        {isMobile && scrollDirection === 'up' ? <NavBurger /> : null}
      </div>
    </header>
  )
}
