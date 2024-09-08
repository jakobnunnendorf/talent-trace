import Image from 'next/image'
import React from 'react'

export default function Companies() {
  const companies = [
    // '/Oldendorff logo.png',
    // '/RioTinto logo.png',
    '/BHP logo.avif',
    '/Vale logo.jpg',
    '/Glencore logo.png',
    '/BHP logo.avif',
    '/Glencore logo.png',
  ]
  return (
    <div className="grid h-96 w-full grid-rows-4 text-center">
      <div className="row-start-2">
        <h2 className="text-3xl">Top Companies hiring at Mysterious Client</h2>{' '}
        {/* Talent Trace */}
        <h4 className="text-md mt-1 text-gray-500">
          We have longstanding business relations with
        </h4>
      </div>
      <div className="row-start-3 mx-auto flex w-[1250px] overflow-hidden">
        <ul className="slide-left flex h-full">
          {companies.map((company, index) => (
            <li
              key={index}
              className={`ml-[100px] w-[150px] ${index % 2 == 1 ? 'bbobrder' : 'gborbder'} flex-shrink-0`}
            >
              <figure className="relative h-full w-full">
                <Image
                  className="object-contain"
                  src={company}
                  fill
                  alt={company}
                />
              </figure>
            </li>
          ))}
        </ul>
        <ul className="slide-left flex h-full">
          {companies.map((company, index) => (
            <li
              key={index}
              className={`ml-[100px] w-[150px] ${index % 2 == 1 ? 'b' : 'g'} flex-shrink-0`}
            >
              <figure className="relative h-full w-full">
                <Image
                  className="object-contain"
                  src={company}
                  fill
                  alt={company}
                />
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
