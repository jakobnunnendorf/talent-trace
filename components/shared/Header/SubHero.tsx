import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/ui/button'

export default function SubHero({
  headline,
  description,
  primaryButton,
  primaryButtonLink,
  secondaryButton,
  secondaryButtonLink,
}: {
  headline: string
  description: string
  primaryButton?: string
  primaryButtonLink?: string
  secondaryButton?: string
  secondaryButtonLink?: string
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
        {primaryButton || secondaryButton ? (
          <div className="mt-12 grid grid-cols-1 grid-rows-2 gap-2 md:grid-cols-2 md:grid-rows-1 md:gap-4">
            {primaryButton && (
              <Link href={primaryButtonLink || '#'}>
                <Button className="ml-auto w-full max-w-sm rounded border-2 border-green bg-green px-1 py-3 text-lg font-semibold text-teal-900 hover:bg-teal-900 hover:text-green md:px-6">
                  {primaryButton}
                </Button>
              </Link>
            )}
            {secondaryButton && (
              <Link href={secondaryButtonLink || '#'}>
                <Button className="mr-auto w-full max-w-sm rounded border-2 border-white bg-transparent px-1 py-3 font-semibold transition hover:bg-white hover:text-blue md:px-6">
                  {secondaryButton}
                </Button>
              </Link>
            )}
          </div>
        ) : null}
      </div>
    </section>
  )
}
