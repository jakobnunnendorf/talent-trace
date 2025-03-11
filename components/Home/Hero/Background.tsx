import React from 'react'
import Image from 'next/image'

export default function Background() {
  return (
    <div className="absolute -z-50 flex h-full w-full overflow-hidden bg-[#0e4d53]">
      <BackgroundImage />
      <BackgroundImage flip />
    </div>
  )
}

const BackgroundImage = ({ flip }: { flip?: boolean }) => {
  return (
    <figure
      className={`drift-right relative right-[100vw] h-full w-[100vh] flex-shrink-0 md:w-[100vw]`}
    >
      <Image
        priority
        src="/hero/Hero-extended xxxs.webp"
        alt="ocean background"
        fill
        sizes="(max-width: 768px) 100vh, 100vw"
        placeholder="blur"
        blurDataURL="/hero/Hero-extended xxxs.webp"
        className={flip ? 'scale-x-[-1]' : ''}
      />
    </figure>
  )
}
