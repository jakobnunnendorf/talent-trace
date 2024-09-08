import Image from 'next/image'
import React from 'react'

export default function UploadCV() {
  return (
    <div className="flex w-fit items-center justify-center gap-2 md:w-32 md:border">
      <p className="hidden md:block">Upload CV </p>
      <figure className="grid place-content-center md:hidden">
        <Image
          src="/upload cv icon.png"
          width={30}
          height={30}
          alt="upload your cv"
        />
        <figcaption className="text-center">CV</figcaption>
      </figure>
    </div>
  )
}
