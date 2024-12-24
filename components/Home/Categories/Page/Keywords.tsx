import React from 'react'

interface Keyword {
  id: string
  name: string
  color: string
}

export default function Keywords({ keywords }: { keywords: Keyword[] }) {
  return (
    <div className="grid w-full grid-cols-3 items-center justify-center gap-8 py-8 md:flex md:justify-start md:gap-8 md:pb-24 md:pt-12">
      <p className="col-span-3 font-bold">Keywords: &nbsp;</p>
      {keywords.map((keyword: any) => {
        return keyword.name
      })}
    </div>
  )
}
