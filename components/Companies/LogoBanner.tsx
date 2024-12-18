import React from 'react'
import Image from 'next/image'
import styles from './slideLeft.module.css'
import { fetchCompanyLogos } from '@/lib/notion'

async function LogoBanner() {
  const companies = await fetchCompanyLogos()

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
                  src={company.logo}
                  fill
                  alt={`Logo of ${company.name}`}
                />
              </figure>
            </li>
          ))}
        </ul>
      ))}
    </div>
  )
}

export default LogoBanner
