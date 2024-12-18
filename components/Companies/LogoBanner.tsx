import React from 'react'
import Image from 'next/image'
import styles from './slideLeft.module.css'

export default function LogoBanner() {
  const companies = [
    '/logos/Oldendorff logo.png',
    '/logos/RioTinto logo.png',
    '/logos/BHP logo.avif',
    '/logos/Vale logo.jpg',
    '/logos/Glencore logo.png',
    '/logos/BHP logo.avif',
    '/logos/Glencore logo.png',
  ]
  return (
    <div className="row-start-3 mx-auto flex overflow-hidden py-4 lg:w-[1250px]">
      {[...Array(2)].map((_, listIndex) => (
        <ul key={listIndex} className={`${styles['slide-left']} flex h-full`}>
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
  )
}
