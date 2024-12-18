import React from 'react'
import SocialLinks from './SocialLinks'
import FooterColumn from './FooterColumn'
import Copyright from './Copyright'
import Image from 'next/image'
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 pt-6">
      <div className="mx-auto grid max-w-7xl grid-cols-2 grid-rows-3 gap-4 pb-6 md:grid-cols-5 md:grid-rows-1">
        <div className="col-span-2 flex flex-col items-start md:col-span-1">
          <div className="my-auto flex flex-col items-center self-center md:my-0 md:self-auto">
            <figure className="mb-2">
              <Image
                src="/logos/Talent Trace logo.png"
                alt="Talent Trace"
                width={100}
                height={100}
              />
            </figure>
            <SocialLinks />
          </div>
        </div>
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