import React from 'react'

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
    <section className="bg-blue px-6 py-12 pt-48 text-center text-white">
      <h1 className="text-4xl font-bold">{headline}</h1>
      <p className="mt-4 text-lg">{description}</p>
      <div className="mt-6 space-x-4">
        {primaryButton && (
          <button className="hover:bg-green-600 rounded bg-green px-6 py-3 font-semibold text-white transition">
            {primaryButton}
          </button>
        )}
        {secondaryButton && (
          <button className="rounded border-2 border-white px-6 py-3 font-semibold transition hover:bg-white hover:text-blue">
            {secondaryButton}
          </button>
        )}
      </div>
    </section>
  )
}

//Get Started Today
//Request a Consultation
