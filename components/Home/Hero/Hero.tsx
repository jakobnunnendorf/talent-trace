import React from 'react'
import Background from './Background'
import Ship from './Ship'
import CTALink from './CTALink'
import Socials from '@/components/shared/Buttons/Socials'

export default function Hero() {
  return (
    <div className="relative grid grid-rows-5 overflow-hidden max-xs:h-screen sm:h-[66vh] md:grid-rows-5 lg:h-screen">
      <Background />
      <Ship />
      <h1
        className={`${gradient} -z-40 row-start-2 mb-4 self-end text-center max-xs:text-4xl xs:text-5xl md:block md:text-7xl md:font-extrabold lg:text-10xl`}
      >
        TALENT TRACE
      </h1>
      <section className="row-span-3 row-start-3 flex flex-col items-center text-white md:row-span-2 md:mx-auto md:w-4/5 md:items-start">
        <article>
          <p className="hidden text-lg font-bold md:block">Talent Trace</p>
          <h2 className="px-2 font-sans text-5xl font-bold text-[#41ADF2] md:text-6xl">
            Tracing Talent
            <br />
            <span className="text-[#9FDC77]">Paving Careers</span>
          </h2>
        </article>
        <nav className="my-8 text-white">
          <div className="flex gap-4">
            <CTALink text="Search Jobs" primary={true} link="/jobs/find" />
            <CTALink text="Find Talent" primary={false} link="/jobs/post" />
          </div>
          <Socials />
        </nav>
      </section>
    </div>
  )
}

const gradient =
  'bg-gradient-to-b from-white/60 md:from-white/30 lg:from-white/20 lg:via-white/6 lg:via-40% lg:to-white/0 bg-clip-text text-transparent'
