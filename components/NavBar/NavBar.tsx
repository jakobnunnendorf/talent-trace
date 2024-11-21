import React from 'react'
import Logo from '../Logo'
import NavLinks from './NavLinks'
import UploadCV from './UploadCV'
import Image from 'next/image'

export default function NavBar() {
  return (
    <header className="absolute z-50 w-full">
      <nav className="relative top-7 mx-auto flex h-14 w-4/5 justify-between text-white lg:justify-normal lg:gap-64">
        <button className="lg:hidden">
          <Image
            src="/navburger.png"
            height={50}
            width={50}
            alt="Navigation burger"
          />
        </button>
        <Logo />
        <div className="lg:flex lg:flex-grow lg:gap-12">
          <NavLinks />
          <UploadCV />
        </div>
      </nav>
    </header>
  )
}
