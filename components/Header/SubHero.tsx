import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

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
  return (
    <section className="relative overflow-hidden">
      <figure className="drift-right absolute z-0 h-full w-[150vh] md:w-[150vw]">
        <Image
          src="/hero/Hero-extended.png"
          alt="Test"
          fill
          className="-z-50"
        />
      </figure>
      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-8 pt-36 text-center text-white md:pb-24 md:pt-48">
        <h1 className="text-4xl font-bold">{headline}</h1>
        {description && <p className="mt-4 text-lg">{description}</p>}
        {primaryButton ||
          (secondaryButton && (
            <div className="mt-12 flex justify-center space-x-4">
              {primaryButton && (
                <Button className="rounded border-2 border-green bg-green px-6 py-3 text-lg font-semibold text-teal-900">
                  {primaryButton}
                </Button>
              )}
              {secondaryButton && (
                <Button className="rounded border-2 border-white px-6 py-3 font-semibold transition hover:bg-white hover:text-blue">
                  {secondaryButton}
                </Button>
              )}
            </div>
          ))}
      </div>
    </section>
  )
}
