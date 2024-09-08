import React from 'react'
import Logo from '../Logo'
import NavLinks from './NavLinks'
import UploadCV from './UploadCV'
import Image from 'next/image'

export default function NavBar() {
  return (
    <header className="z-90 absolute w-full">
      <nav className="relative top-7 mx-auto flex h-14 w-4/5 justify-between text-white md:justify-normal md:gap-64">
        <button className="md:hidden">
          <Image
            src="/navburger.png"
            height={50}
            width={50}
            alt="Navigation burger"
          />
        </button>
        <Logo />
        <div className="md:flex md:flex-grow md:gap-12">
          <NavLinks />
          <UploadCV />
        </div>
      </nav>
    </header>
  )
}
