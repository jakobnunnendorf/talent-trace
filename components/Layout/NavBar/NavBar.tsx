'use client'
import React, { useEffect, useState } from 'react'
import Logo from '../../shared/Logo'
import NavLinks from './NavLinks'
import UploadCV from './UploadCV'
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
      className={`z-50 grid w-full ${scrollDirection === 'down' ? 'grid-cols-1' : 'grid-cols-2 bg-white/10 backdrop-blur-2xl md:bg-transparent md:backdrop-blur-0'} items-center px-8 py-4 md:grid-cols-3 md:py-7`}
    >
      <div
        className={`transform transition-all duration-700 ease-in-out ${
          scrollDirection === 'down'
            ? 'hidden md:block md:translate-x-1/2'
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
        {!isMobile ? (
          <UploadCV scrollDirection={scrollDirection} />
        ) : scrollDirection === 'up' ? (
          <NavBurger scrollDirection={scrollDirection} />
        ) : (
          <UploadCV scrollDirection={scrollDirection} />
        )}
      </div>
    </header>
  )
}
