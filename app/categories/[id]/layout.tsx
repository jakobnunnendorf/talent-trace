import React from 'react'
import SubHero from '@/components/shared/Header/SubHero'
import CTASection from '@/components/shared/sections/CTASection'

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      {children}
      <CTASection
        title="Let’s Build the Future Together"
        description="At Talent Trace, we’re passionate about building successful partnerships that empower businesses and transform careers."
        primaryButton={{ text: 'Find Talent', href: '/jobs#post-job-form' }}
        secondaryButton={{
          text: 'Advance Your Career',
          href: '/jobs#rec_job_listing_div',
        }}
      />
    </section>
  )
}
