import React from 'react'
import Logo from '../../shared/Logo'
import NavLinks from './NavLinks'
import NavBurger from './NavBurger'

export default function NavBar() {
  return (
    <header className="w-full py-4 md:h-24">
      <nav className="mx-auto flex w-fit items-center justify-center gap-12 md:rounded-full md:px-4 md:py-2 md:backdrop-blur-2xl">
        <Logo />
        <NavLinks />
        <NavBurger />
      </nav>
    </header>
  )
}
