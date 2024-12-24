import SubHero from '@/components/shared/Header/SubHero'
import React from 'react'
import { textSections } from './content'
import TextSection from '@/components/shared/sections/TextSection'
import CTASection from '@/components/shared/sections/CTASection'

const JoinUsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <SubHero
        headline="Join Us"
        description="Shape Your Career with Talent Trace"
      />
      {textSections.map((textSection, index) => {
        return (
          <TextSection
            key={index}
            heading={textSection.heading}
            paragraphs={textSection.paragraphs}
            bulletPoints={textSection.bulletPoints}
            bg={index % 2 === 1}
          />
        )
      })}
      {/* CTA Section  */}
      <CTASection
        title="Start Your Journey with Talent Trace"
        description="Become part of a team that’s shaping the future of recruitment. Let’s
          grow together."
        primaryButton={{
          text: 'Apply now',
          href: 'https://talent-trace.zohorecruit.com/forms/677184c20dcfb9044e43b5672ceb5e3530c617412e8922022dcc64355524d8f5',
        }}
        secondaryButton={{
          text: 'Follow Us on LinkedIn',
          href: 'https://www.linkedin.com/company/talent-trace/',
        }}
      />
    </div>
  )
}

export default JoinUsPage
