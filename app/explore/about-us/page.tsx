import MessageFromPravin from '@/components/Explore/About-Us/MessageFromPravin'
import SubHero from '@/components/shared/Header/SubHero'
import CTASection from '@/components/shared/sections/CTASection'
import FeatureGrid from '@/components/shared/sections/FeatureGrid'
import TextSection from '@/components/shared/sections/TextSection'
import React from 'react'
import { textSections, features } from './content'

const AboutUsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      <SubHero
        headline="About Us"
        description=" Your Global Partner in Talent and HR Solutions"
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

      <MessageFromPravin />
      <FeatureGrid title="Why Choose Talent Trace?" features={features} />
      <CTASection
        title="Let’s Build the Future Together"
        description="At Talent Trace, we’re passionate about building successful partnerships that empower businesses and transform careers."
        primaryButton={{ text: 'Find Talent', href: '/jobs/post' }}
        secondaryButton={{ text: 'Advance Your Career', href: '/jobs/find' }}
      />
    </div>
  )
}

export default AboutUsPage
