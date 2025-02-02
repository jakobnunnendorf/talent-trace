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
          <Socials color="black" />
        </div>
      </div>
      <div className="mx-auto grid w-fit max-w-7xl grid-cols-2 grid-rows-2 gap-4 pb-6 pt-4 md:w-auto md:grid-cols-5 md:grid-rows-1">
        {footerSections.map((section, index) => {
          return (
            <FooterColumn
              key={index}
              title={section.title}
              links={section.links}
            />
          )
        })}
      </div>
      <Copyright />
    </footer>
  )
}

const footerSections = [
  {
    title: 'For Candidates',
    links: [
      { href: '/jobs/find', text: 'Job Opportunities' },
      { href: '/#job-categories', text: 'Browse Categories' },
      {
        href: 'https://talent-trace.zohorecruit.com/forms/677184c20dcfb9044e43b5672ceb5e3530c617412e8922022dcc64355524d8f5',
        text: 'Upload CV',
      },
    ],
  },
  {
    title: 'For Employers',
    links: [
      { href: '/jobs/post', text: 'Post Job' },
      { href: '/services/executive-search', text: 'Executive Search' },
      { href: '/services/contingent-search', text: 'Contingent Search' },
      { href: '/services/consultancy', text: 'Consultancy' },
    ],
  },
  {
    title: 'Explore',
    links: [
      { href: '/explore/about-us', text: 'About Us' },
      { href: '/explore/join-us', text: 'Join the team' },
      { href: '/explore/news', text: 'News' },
    ],
  },
  {
    title: 'Contact Us',
    links: [
      { href: '/contact-us', text: 'Send us a Message' },
      {
        text: 'Upload CV',
        href: 'https://talent-trace.zohorecruit.com/forms/677184c20dcfb9044e43b5672ceb5e3530c617412e8922022dcc64355524d8f5',
      },
    ],
  },
  {
    title: 'Legal',
    links: [
      { href: '/legal/privacy-policy', text: 'Privacy Policy' },
      { href: '/legal/terms-and-conditions', text: 'Terms and Conditions' },
    ],
  },
]

export default Footer
