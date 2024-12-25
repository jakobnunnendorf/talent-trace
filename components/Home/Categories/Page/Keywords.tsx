import { Badge } from '@/components/ui/badge'
import React from 'react'

interface Keyword {
  id: string
  name: string
  color: string
}

export default function Keywords({ keywords }: { keywords: Keyword[] }) {
  return (
    <ul className="grid w-full grid-cols-3 grid-rows-1 items-center justify-center gap-8 py-8 md:flex md:justify-start md:gap-8">
      <li className="col-span-3 font-bold">Keywords: &nbsp;</li>
      {keywords.map((keyword) => {
        return (
          <Badge
            key={keyword.id}
            className="h-full bg-green text-black hover:bg-blue hover:text-white active:bg-blue active:text-white"
          >
            {keyword.name}
          </Badge>
        )
      })}
    </ul>
  )
}
