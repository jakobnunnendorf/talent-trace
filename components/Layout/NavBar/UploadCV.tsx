import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/ui/button'
interface UploadCVProps {
  scrollDirection: 'up' | 'down'
}

export default function UploadCV({ scrollDirection }: UploadCVProps) {
  return (
    <Link
      href="https://talent-trace.zohorecruit.com/forms/677184c20dcfb9044e43b5672ceb5e3530c617412e8922022dcc64355524d8f5"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button
        className={` ${scrollDirection === 'up' ? 'mx-auto w-fit lg:w-36' : 'mr-auto w-64 px-12'} bounce-animation flex h-[58px] items-center justify-center gap-2 rounded-full bg-blue/80 px-6 shadow-xl backdrop-blur-md transition-opacity hover:opacity-80`}
      >
        Upload CV
      </Button>
    </Link>
  )
}
