import React from 'react'

export default function TextSection({
  heading,
  paragraphs,
  bulletPoints,
  bg,
  ol,
}: {
  heading: string
  paragraphs?: string[]
  bulletPoints?: string[]
  bg?: boolean
  ol?: boolean
}) {
  return (
    <section className={`${bg ? 'bg-gray-100' : null} px-6 py-12`}>
      <h2 className="text-center text-3xl font-bold">{heading}</h2>
      {paragraphs?.map((paragraph, index) => (
        <p key={index} className="mx-auto mt-4 max-w-3xl text-center text-lg">
          {paragraph}
        </p>
      ))}
      {bulletPoints &&
        (ol ? (
          <ol className="mx-auto mt-6 max-w-3xl list-none space-y-6 px-8 text-lg">
            {bulletPoints.map((bulletPoint, index) => (
              <li key={index}>
                {bulletPoint.includes(':') ? (
                  <>
                    <strong>{bulletPoint.split(':')[0]}</strong>:
                    {bulletPoint.split(':')[1]}
                  </>
                ) : (
                  bulletPoint
                )}
              </li>
            ))}
          </ol>
        ) : (
          <ul className="mx-auto mt-6 max-w-3xl list-inside list-disc space-y-6 px-8 text-lg">
            {bulletPoints.map((bulletPoint, index) => (
              <li key={index}>
                {bulletPoint.includes(':') ? (
                  <>
                    <strong>{bulletPoint.split(':')[0]}</strong>:
                    {bulletPoint.split(':')[1]}
                  </>
                ) : (
                  bulletPoint
                )}
              </li>
            ))}
          </ul>
        ))}
    </section>
  )
}
