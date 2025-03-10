import React from 'react'
import SubHero from '@/components/shared/Header/SubHero'
import TextSection from '@/components/shared/sections/TextSection'
import FeatureGrid from '@/components/shared/sections/FeatureGrid'
import CTASection from '@/components/shared/sections/CTASection'
import { whyChooseUsFeatures, consultancyContent } from './content'

const ConsultancyPage: React.FC = () => {
  const { introduction, benchmarking, industries, testimonials } =
    consultancyContent

  return (
    <div className="bg-gray-50 text-gray-800">
      <SubHero
        headline="Consultancy Services Tailored to Your Success"
        description="Transforming Challenges into Opportunities. Our bespoke consultancy services empower businesses across industries to streamline operations, enhance productivity, and achieve measurable results."
        primaryButton="Request a Consultation"
        primaryButtonLink="contact-us"
        secondaryButton="Refer a Friend"
        secondaryButtonLink="mailto:?subject=Talent%20Trace%20Consultancy%20Services%20Referral&body=I%20thought%20you%20might%20be%20interested%20in%20Talent%20Trace's%20Consultancy%20Services.%20They%20offer%20expert%20guidance%20on%20HR%20and%20recruitment%20strategy.%20Learn%20more%20at%3A%20https%3A%2F%2Ftalent-trace.com%2Fservices%2Fconsultancy"
      />

      <TextSection {...introduction} />

      <TextSection {...benchmarking} />

      <TextSection {...industries} bg />

      <FeatureGrid
        title="Why Choose Talent Trace for Consultancy?"
        features={whyChooseUsFeatures}
        columns={2}
        bgColor="gray"
      />

      {/* <TextSection {...testimonials} /> */}

      <CTASection
        title="Let's Build Your Success Together"
        description="Take the first step toward operational excellence. Whether you need market insights, employee engagement strategies, or streamlined workflows, we're here to help."
        primaryButton={{
          text: 'Request a Consultation',
          href: 'contact-us',
        }}
        secondaryButton={{ text: 'Speak to Our Experts', href: '/contact-us' }}
      />
    </div>
  )
}

export default ConsultancyPage
