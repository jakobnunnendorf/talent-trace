import Image from 'next/image'
import React from 'react'

export default function UploadCV() {
  return (
    <div className="flex w-fit items-center justify-center gap-2 lg:w-32 lg:border">
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
    </div>
  )
}
