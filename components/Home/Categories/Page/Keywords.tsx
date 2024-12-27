import { Badge } from '@/components/ui/badge'
import React from 'react'

interface Keyword {
  id: string
  name: string
  color: string
}

export default function Keywords({ keywords }: { keywords: Keyword[] }) {
  return (
    <ul
      className={`grid w-full grid-cols-3 ${'grid-rows-' + (Math.ceil(keywords.length / 3) + 1).toString()} items-center justify-center gap-4 py-8 md:flex md:justify-start md:gap-8`}
    >
      <li className="col-span-3 font-bold">Keywords: &nbsp;</li>
      {keywords.map((keyword) => {
        return (
          <li key={keyword.id} className="h-full w-full">
            <Badge className="h-full w-full text-wrap bg-green text-center text-white hover:bg-blue active:bg-blue active:text-white">
              {keyword.name}
            </Badge>
          </li>
        )
      })}
    </ul>
  )
}
