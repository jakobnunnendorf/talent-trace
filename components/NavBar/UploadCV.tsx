import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function UploadCV() {
  return (
    <Link 
      href="https://talent-trace.zohorecruit.com/forms/677184c20dcfb9044e43b5672ceb5e3530c617412e8922022dcc64355524d8f5"
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-fit items-center justify-center gap-2 lg:w-32 lg:border hover:opacity-80 transition-opacity"
    >
      <figure className="flex flex-col items-center gap-1">
        <Image
          className="lg:hidden"
          src="/upload cv icon.png"
          width={30}
          height={30}
          alt="upload your cv"
        />
        <figcaption className="text-center">
          <span className="hidden md:inline">Upload</span> CV
        </figcaption>
      </figure>
    </Link>
  )
}
