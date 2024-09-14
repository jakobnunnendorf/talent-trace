import React from 'react'
import ClientName from './ClientName'
import Headline from './Headline'
import ActionButtons from './ActionButtons'

export default function HeroContent() {
  return (
    <div className="md:row-span-2 md:row-start-3 md:grid">
      {/* <ClientName /> */}
      <Headline />
      <ActionButtons />
    </div>
  )
}
