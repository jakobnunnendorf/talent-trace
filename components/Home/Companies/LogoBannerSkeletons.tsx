import { Skeleton } from '@/components/ui/skeleton'
import styles from './slideLeft.module.css'
import React from 'react'

export default function LogoBannerSkeletons() {
  return (
    <div className="row-span-2 row-start-3 mx-auto flex overflow-hidden py-4 lg:w-[1250px]">
      {[...Array(2)].map((_, listIndex) => (
        <ul key={listIndex} className={`${styles['slide-left']} flex h-full`}>
          {[...Array(6)].map((element, index) => (
            <Skeleton
              key={`${listIndex}-${index}`}
              className="ml-[100px] h-24 w-[150px] flex-shrink-0 md:h-auto"
            />
          ))}
        </ul>
      ))}
    </div>
  )
}
