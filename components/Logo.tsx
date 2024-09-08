import Image from 'next/image'
import React from 'react'

export default function Logo() {
  return (
    <Image
      src="/Talent Trac logo.png"
      height={58}
      width={127}
      alt="Mysterious client Logo"
    />
  )
}
