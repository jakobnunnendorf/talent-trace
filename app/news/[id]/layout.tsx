import React from 'react'
import SubHero from '@/components/shared/Header/SubHero'
import SubscribeToNewsLetter from '@/components/Explore/News/SubscribeToNewsLetter'
import CTASection from '@/components/shared/sections/CTASection'

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <SubHero
        headline="Latest News"
        description="Stay informed with Talent Trace updates"
      />
      {children}
      <SubscribeToNewsLetter />
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
