import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function MainButton({
  buttonText,
  secondary = false,
  full = false,
  className = '',
  href = '',
}: {
  buttonText: string
  secondary?: boolean
  full?: boolean
  className?: string
  href?: string
}) {
  return (
    <Button
      className={`flex items-center justify-center px-6 py-3 font-semibold transition ${
        secondary
          ? `bg-transparent ${
              full ? 'border-2 border-white' : 'underline underline-offset-4'
            } hover:border-white hover:bg-transparent hover:text-white`
          : 'hover:bg-green-600 border-2 border-green bg-green'
      } text-white shadow-xl ${className}`}
    >
      <Link href={href}>{buttonText}</Link>
    </Button>
  )
}
