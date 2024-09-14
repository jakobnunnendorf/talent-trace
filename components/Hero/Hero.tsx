import React from 'react'
import Background from './Background'
import Ship from './Ship'
import CompanyBanner from './CompanyBanner'
import HeroContent from './HeroContent'

export default function Hero() {
  return (
    <div className="relative flex h-[66vh] flex-col items-center justify-center overflow-hidden text-white md:grid md:h-screen md:grid-rows-5">
      <Background />
      <Ship />
      <CompanyBanner />
      <HeroContent />
    </div>
  )
}
