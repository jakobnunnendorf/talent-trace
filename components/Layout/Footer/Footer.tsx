import React from 'react'
import FooterColumn from './FooterColumn'
import Copyright from './Copyright'
import Socials from '@/components/shared/Buttons/Socials'
import Image from 'next/image'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100">
      <div className="mx-auto h-fit border-b">
        <div className="flex h-fit items-center justify-center gap-8 self-center">
          {/* <Logo /> */}
          <figure className="">
            <Image
              src="/logos/Talent Trace logo.png"
              height={150}
              width={150}
              alt="Talent Trace Logo"
            />
          </figure>
          <Socials dark />
        </div>
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-2 grid-rows-2 gap-4 pb-6 pt-4 md:grid-cols-4 md:grid-rows-1">
        <FooterColumn title="For Candidates" links={candidateLinks} />
        <FooterColumn title="For Employers" links={employerLinks} />
        <FooterColumn title="Other" links={otherLinks} />
        <FooterColumn title="Legal" links={legalLinks} />
      </div>
      <Copyright />
    </footer>
  )
}

const candidateLinks = [
  { href: '#', text: 'Job Opportunities' },
  { href: '#', text: 'Browse Categories' },
  { href: '#', text: 'Upload CV' },
]

const employerLinks = [
  { href: '#', text: 'Browse Candidates' },
  { href: '#', text: 'Employer Dashboard' },
  { href: '#', text: 'Add Job' },
]

const otherLinks = [
  { href: '#', text: 'About Us' },
  { href: '#', text: 'Executive Search' },
  { href: '#', text: 'Contingency Search' },
  { href: '#', text: 'News' },
  { href: '#', text: 'Contact Us' },
]

const legalLinks = [
  { href: '#', text: 'Privacy Policy' },
  { href: '#', text: 'Terms and Conditions' },
]

export default Footer
