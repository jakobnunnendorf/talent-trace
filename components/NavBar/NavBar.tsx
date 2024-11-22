'use client'
import React, { useEffect, useState } from 'react'
import Logo from '../Logo'
import NavLinks from './NavLinks'
import UploadCV from './UploadCV'
import NavBurger from './NavBurger'

export default function NavBar() {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up')
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const scrollThreshold = 10

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
    <header className="grid w-full grid-cols-3 items-center px-8 py-4">
      <div
        className={`transform transition-all duration-700 ease-in-out ${
          scrollDirection === 'down' ? 'translate-x-1/2' : 'translate-x-0 gap-4'
        }`}
      >
        <Logo scrollDirection={scrollDirection} />
      </div>
      <div className="flex justify-center">
        <NavLinks scrollDirection={scrollDirection} />
      </div>
      <div
        className={`transform transition-all duration-700 ease-in-out ${
          scrollDirection === 'down' ? '-translate-x-1/2' : 'translate-x-0'
        }`}
      >
        <UploadCV scrollDirection={scrollDirection} />
      </div>
    </header>
  )
}
