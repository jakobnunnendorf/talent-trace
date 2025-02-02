import React from 'react'
import Image from 'next/image'
import styles from './slideLeft.module.css'
import { fetchCompanyLogos } from '@/lib/notion'

async function LogoBanner() {
  const companies = await fetchCompanyLogos()

  return (
    <div className="row-span-2 row-start-3 mx-auto flex overflow-hidden py-4 lg:w-[1250px]">
      {[...Array(2)].map((_, listIndex) => (
        <ul key={listIndex} className={`${styles['slide-left']} flex h-full`}>
          {companies.map((company, index) => {
            return (
              <li
                key={`${listIndex}-${index}`}
                className="ml-[100px] h-24 w-[150px] flex-shrink-0 md:h-auto"
              >
                <figure className="relative h-full w-full overflow-hidden rounded-lg">
                  <Image
                    className="object-contain"
                    src="https://prod-files-secure.s3.us-west-2.amazonaws.com/aca80ab9-1a90-4ec5-83d3-d44b3d86983d/d03e9f75-682f-48b7-b019-eb2bda92e50b/Glencore_logo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QSVQEC2%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T014612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHzOosL7jS0FBwaaNmpIytEb0AAwZV6beu3o1LDDTrB1AiEAi0VU938iYRCXr3K20D5LFVem%2FGhDykG7faHLSDG0j2oqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGViANr57h%2F7Y7TuaCrcA%2Flar3OgA0nzJLAEWMD9Ifc2IiOMz5QTZi%2BubADXD2NODjk3x%2FQ4ZtLjaUHEqNU%2FeoCa67R%2Bp%2Fj1MyWHw18jxCCcqF%2FZYRI13eb44ri5XFfwrneN8HdCJcoyB8PxPKnqHvJGKWRBUGqA0Oms9uQ5oN%2FeSpvlaSUXXo6yYvup5bQPc1h4JrPfaI96wAN8UuMu2YPM%2FTEpjAx2zWASXVfd6oY%2BtS1o7MrJVCwKXVF%2BKta3Mqh5quNGKvKRufB%2FrFuyxMg2Fw8RUjHjanbjT2lS%2FNK1gnfA69Gdn7azg599hFAeqbzNDux%2F%2BfrROHLmC76q4eVFNromWCsef70FZuUHQccBayb4mVv3jDzncM9KYXvr0%2F7kEqwLgvDw9nOsAvT0B7%2BDLzu9TZ7gNi0s6yyC7Tfv6ClS%2BcMZfuITVyF1A9C1NBgVDDKnKv918aX0%2FY2ZZ0Rq1sf7h%2BxrH%2BSREEiztnoYgVEQsQscx988%2FoymDCbq5b20L4GRWJqYDGxOVNqmXujE7UptBT1pXEjPwSHi1jkXuvMk6K%2FD9biLcEAfrFq8X3tePwIrFdqPisH6Jl1ARkSKuO5drkUPGRPsG39byEy3lUintcb0jAWBrylzSRgrolDLvr0Co%2B63tE%2FlMOCX67wGOqUBTp51r7B1y7MpesmJeI%2F1ov%2BGDGO%2Fgmgqdh%2BRreJkvjkMV4rWgJs4IBg7cwlY4D1d62cMtH9AKYH%2BXs0Gx3gAjD6j%2F4sq0D3iPmnKfOtU%2FRQ31i9R4BCI3MdDO%2FfXKNWli17E5S2hJ7%2Fu%2F7utyksjEv8GqLfUUp3NUlew7cKahP%2FGeqPNF0GbDz%2FaSGSBmqTd13X3ZRGsejJ9YSw3pjsQm1%2B0roia&X-Amz-Signature=837db0fde9a1f26f8e1ba835c038d261905478e44256365c91f6e385386fec4f&X-Amz-SignedHeaders=host&x-id=GetObject"
                    fill
                    alt={company.name}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,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"
                  />
                </figure>
              </li>
            )
          })}
        </ul>
      ))}
    </div>
  )
}

export default LogoBanner
