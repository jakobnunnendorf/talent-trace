import React from 'react'

export default function TextSection({
  heading,
  paragraphs,
  bulletPoints,
  bg,
}: {
  heading: string
  paragraphs?: string[]
  bulletPoints?: string[]
  bg?: boolean
}) {
  return (
    <section className={`${bg ? 'bg-gray-100' : null} px-6 py-12`}>
      <h2 className="text-center text-3xl font-bold">{heading}</h2>
      {paragraphs?.map((paragraph, index) => (
        <p key={index} className="mx-auto mt-4 max-w-3xl text-center text-lg">
          {paragraph}
        </p>
      ))}
      <ul className="mx-auto mt-6 max-w-3xl list-inside list-disc text-lg">
        {bulletPoints?.map((bulletPoint, index) => (
          <li key={index}>{bulletPoint}</li>
        ))}
      </ul>
    </section>
  )
}
