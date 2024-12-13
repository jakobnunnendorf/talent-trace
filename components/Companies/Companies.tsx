import Image from 'next/image'
import React from 'react'

export default function Companies() {
  const companies = [
    '/Oldendorff logo.png',
    '/RioTinto logo.png',
    '/BHP logo.avif',
    '/Vale logo.jpg',
    '/Glencore logo.png',
    '/BHP logo.avif',
    '/Glencore logo.png',
  ]
  return (
    <div className="z-50 w-full overflow-hidden bg-white py-8 pb-0 text-center md:grid md:h-96 md:grid-rows-4 md:py-0 md:pb-8">
      <div className="row-start-2 w-screen">
        <h2 className="text-3xl">Top Companies hiring at Talent Trace</h2>
        <h4 className="text-md mt-1 py-4 text-gray-500 md:py-0">
          We have longstanding business relations with
        </h4>
      </div>
      <div className="row-start-3 mx-auto flex w-[1250px] py-4">
        {[...Array(2)].map((_, listIndex) => (
          <ul key={listIndex} className="slide-left flex h-full">
            {companies.map((company, index) => (
              <li
                key={`${listIndex}-${index}`}
                className="ml-[100px] h-24 w-[150px] flex-shrink-0 md:h-auto"
              >
                <figure className="relative h-full w-full">
                  <Image
                    className="object-contain"
                    src={company}
                    fill
                    alt={`Logo of ${company.split('/').pop()?.split('.')[0]}`}
                  />
                </figure>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}
