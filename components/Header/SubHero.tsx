import Image from 'next/image'
import React from 'react'
import Background from '../Hero/Background'

export default function SubHero({
  headline,
  description,
  primaryButton,
  secondaryButton,
}: {
  headline: string
  description: string
  primaryButton?: string
  secondaryButton?: string
}) {
  // relative grid h-[66vh] grid-rows-6 overflow-hidden md:grid-rows-5 lg:h-screen
  // relative overflow-hidden px-6 py-12 pt-48 text-center
  return (
    <section className="relative overflow-hidden">
      {/* <Background /> */}

      {/* <Image
        src="/hero/Hero-extended.png"
        alt="Test"
        height={1000}
        width={1000}
      /> */}
      <figure className="drift-right absolute z-0 h-full w-[150vh] md:w-[150vw]">
        <Image
          src="/hero/Hero-extended.png"
          alt="Test"
          fill
          className="-z-50"
        />
      </figure>
      <div className="relative z-10 px-6 py-24 pt-48 text-center text-white">
        <h1 className="text-4xl font-bold">{headline}</h1>
        <p className="mt-4 text-lg">{description}</p>
        <div className="mt-12 flex justify-center space-x-4">
          {primaryButton && (
            <button className="rounded border-2 border-green bg-green px-6 py-3 text-lg font-semibold text-teal-900">
              {primaryButton}
            </button>
          )}
          {secondaryButton && (
            <button className="rounded border-2 border-white px-6 py-3 font-semibold transition hover:bg-white hover:text-blue">
              {secondaryButton}
            </button>
          )}
        </div>
      </div>
    </section>
  )
}

//Get Started Today
//Request a Consultation
