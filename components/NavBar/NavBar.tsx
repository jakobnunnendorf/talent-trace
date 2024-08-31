import React from 'react'
import Logo from '../Logo'
import NavLinks from './NavLinks'
import UploadCV from './UploadCV'

export default function NavBar() {
  return (
    <header className="z-90 absolute w-full">
      <nav className="relative top-7 mx-auto flex h-14 w-4/5 gap-64 border">
        <Logo />
        <div className="flex flex-grow gap-12">
          <NavLinks />
          <UploadCV />
        </div>
      </nav>
    </header>
  )
}
