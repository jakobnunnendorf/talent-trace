import React from 'react'
import SubHero from '@/components/shared/Header/SubHero'
import TextSection from '@/components/shared/sections/TextSection'
import FeatureGrid from '@/components/shared/sections/FeatureGrid'
import CTASection from '@/components/shared/sections/CTASection'
import { whyChooseUsFeatures, contingentContent } from './content'

const ContingentSearchPage: React.FC = () => {
  const { introduction, process, targetAudience, testimonials } =
    contingentContent

  return (
    <div className="bg-gray-50 text-gray-800">
      <SubHero
        headline="Contingent Search Services"
        description="Find the Right Talent Without the Upfront Costs. With Talent Trace's Contingent Search services, you only pay when the right candidate is successfully placed. Save time, save resources, and focus on growing your business."
        primaryButton="Start Your Search"
        secondaryButton="Learn More About Contingent Search"
      />

      <TextSection {...introduction} />

      <FeatureGrid
        title="Why Choose Contingent Search with Talent Trace?"
        features={whyChooseUsFeatures}
        columns={3}
        bgColor="gray"
      />

      <TextSection {...process} bg ol />

      <TextSection {...targetAudience} />

      <TextSection {...testimonials} bg />

      <CTASection
        title="Ready to Find the Right Candidate?"
        description="Take the hassle out of hiring with Talent Trace's Contingent Search services. Let's help you build a stronger, more capable team today."
        primaryButton={{ text: 'Start Your Search', href: '/jobs/post' }}
        secondaryButton={{ text: 'Talk to an Expert', href: '/contact-us' }}
      />
    </div>
  )
}

export default ContingentSearchPage
