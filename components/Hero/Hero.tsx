import React from 'react'
import Background from './Background'
import Ship from './Ship'
import CTALink from './CTALink'
import { SlEnvolope, SlSocialLinkedin, SlPhone } from 'react-icons/sl'
import Link from 'next/link'

const IconLink = ({ icon, link }: { icon: React.ReactNode; link: string }) => {
  return (
    <li className="hover:border-blue hover:bg-blue group flex items-center justify-center rounded-full border border-white p-2 text-2xl opacity-50 hover:opacity-100 hover:shadow-xl">
      <Link className="group-hover:text-white" href={link}>
        {icon}
      </Link>
    </li>
  )
}

// TODO add real links
const socialLinks = [
  { icon: <SlSocialLinkedin />, link: 'https://www.linkedin.com/' },
  { icon: <SlPhone />, link: 'tel:+1234567890' },
  { icon: <SlEnvolope />, link: 'mailto:contact@talent-trace.com' },
]

export default function Hero() {
  return (
    <div className="relative grid h-[66vh] grid-rows-6 overflow-hidden md:grid-rows-5 lg:h-screen">
      <Background />
      <Ship />
      <h1 className="hidden bg-gradient-to-b from-white/20 via-white/5 via-40% to-white/0 bg-clip-text text-center text-transparent md:row-start-2 md:block md:text-7xl md:font-extrabold lg:text-10xl">
        TALENT TRACE
      </h1>
      <section className="row-span-3 row-start-3 flex flex-col items-center text-white md:row-span-2 md:mx-auto md:w-4/5 md:items-start">
        <article>
          <p className="text-lg font-bold">Talent Trace</p>
          <h2 className="font-sans text-5xl font-bold text-[#41ADF2] md:text-6xl">
            Tracing Talent
            <br />
            <span className="text-[#9FDC77]">Paving Careers</span>
          </h2>
        </article>
        <nav className="my-8 text-white">
          <div className="flex gap-4">
            <CTALink text="Search Jobs" primary={true} link="/jobs" />
            <CTALink text="Find Talent" primary={false} link="/talent" />
          </div>
          <ul className="flex justify-center gap-4 px-1 py-8 md:justify-start md:py-6">
            {socialLinks.map((link, index) => (
              <IconLink key={index} icon={link.icon} link={link.link} />
            ))}
          </ul>
        </nav>
      </section>
    </div>
  )
}
