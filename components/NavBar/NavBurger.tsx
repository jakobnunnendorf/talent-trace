import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'

export default function NavBurger() {
  return (
    <Button className="lg:hidden">
      <Image
        src="/navburger.png"
        height={50}
        width={50}
        alt="Navigation burger"
      />
    </Button>
  )
}
