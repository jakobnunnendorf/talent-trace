import React from 'react'
import SubHero from '@/components/shared/Header/SubHero'
import TextSection from '@/components/shared/sections/TextSection'
import FeatureGrid from '@/components/shared/sections/FeatureGrid'
import CTASection from '@/components/shared/sections/CTASection'
import {
  whyChooseUsFeatures,
  consultancyServices,
  consultancyContent,
} from './content'

const ConsultancyPage: React.FC = () => {
  const { introduction, industries, testimonials } = consultancyContent

  return (
    <div className="bg-gray-50 text-gray-800">
      <SubHero
        headline="Consultancy Services Tailored to Your Success"
        description="Transforming Challenges into Opportunities. Our bespoke consultancy services empower businesses across industries to streamline operations, enhance productivity, and achieve measurable results."
        primaryButton="Request a Consultation"
        primaryButtonLink="https://calendly.com/jakobnunnendorf/call"
        secondaryButton="Explore Our Services"
        secondaryButtonLink="/#service-card"
      />

      <TextSection {...introduction} />

      <FeatureGrid
        title="Our Services"
        features={consultancyServices}
        columns={2}
        bgColor="gray"
      />

      <TextSection {...industries} bg />

      <FeatureGrid
        title="Why Choose Talent Trace for Consultancy?"
        features={whyChooseUsFeatures}
        columns={2}
        bgColor="gray"
      />

      <TextSection {...testimonials} />

      <CTASection
        title="Let's Build Your Success Together"
        description="Take the first step toward operational excellence. Whether you need market insights, employee engagement strategies, or streamlined workflows, we're here to help."
        primaryButton={{
          text: 'Request a Consultation',
          href: 'https://calendly.com/jakobnunnendorf/call',
        }}
        secondaryButton={{ text: 'Speak to Our Experts', href: '/contact-us' }}
      />
    </div>
  )
}

export default ConsultancyPage
