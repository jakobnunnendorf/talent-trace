import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function MainButton({
  buttonText,
  secondary = false,
  full = false,
  className = '',
  link,
  disabled = false,
  type,
}: {
  buttonText: string
  link?: string
  secondary?: boolean
  full?: boolean
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}) {
  return (
    <Button
      disabled={disabled}
      type={type}
      className={`flex items-center justify-center px-6 py-3 font-semibold transition ${
        secondary
          ? `bg-transparent ${
              full
                ? 'border-2 border-white shadow-xl'
                : 'underline underline-offset-4'
            } hover:border-white hover:bg-transparent hover:text-white`
          : 'hover:bg-green-600 border-2 border-green bg-green'
      } text-white ${className}`}
    >
      {link && <Link href={link || '#'}>{buttonText}</Link>}
      {!link && <p>{buttonText}</p>}
    </Button>
  )
}
