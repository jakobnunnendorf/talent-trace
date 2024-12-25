import { Badge } from '@/components/ui/badge'
import React from 'react'

interface Keyword {
  id: string
  name: string
  color: string
}

export default function Keywords({ keywords }: { keywords: Keyword[] }) {
  return (
    <div className="grid w-full grid-cols-3 items-center justify-center gap-8 py-8 md:flex md:justify-start md:gap-8">
      <p className="col-span-3 font-bold">Keywords: &nbsp;</p>
      {keywords.map((keyword) => {
        return (
          <Badge key={keyword.id} className="bg-green text-black">
            {keyword.name}
          </Badge>
        )
      })}
    </div>
  )
}
