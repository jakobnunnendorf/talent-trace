import SubHero from '@/components/shared/Header/SubHero'
import React from 'react'
import { textSections } from './content'
import TextSection from '@/components/shared/sections/TextSection'
import CTASection from '@/components/shared/sections/CTASection'
import FeatureGrid from '@/components/shared/sections/FeatureGrid'

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
      <FeatureGrid
        title="Culture"
        subtitle="At Talent Trace, we're building something special. Our culture is the foundation of everything we do."
        features={[
          {
            title: 'Ownership and Autonomy',
            description:
              "At Talent Trace, we want you to feel like you have the wheel. You'll have the freedom to make decisions and trust that we'll back you up every step of the way. Your ideas and efforts will truly make a difference, and you'll find that your unique personality is celebrated within our team.",
          },
          {
            title: 'Integrity and Purpose',
            description:
              "For us, doing the right thing isn't just a saying—it's at the heart of what we do. Even when nobody's watching, we act with honesty and a deep sense of responsibility. Our goal goes beyond just filling job positions; it's about creating meaningful connections that make a lasting impact on both businesses and individuals. We tackle every task with a shared sense of purpose, knowing our combined efforts lead to greater outcomes.",
          },
          {
            title: 'Culture of Meritocracy',
            description:
              "Effort, talent, and results are what count at Talent Trace. Your growth and success are determined by what you achieve, not by titles, tenure, or office politics. We're committed to fostering an open and fair environment where everyone has the chance to excel, be recognized, and shape their future based on merit.",
          },
          {
            title: 'Quality Over Quantity',
            description:
              "At Talent Trace, we believe in the power of quality over quantity. It's not about how many tasks we complete, but how well we complete them. We focus on delivering high-quality results that truly make an impact. This approach ensures that every piece of work we do is meaningful and adds value to our clients and our team.",
          },
          {
            title: 'Teamwork and Collaboration',
            description:
              "At the core of everything we do is true teamwork. We don't just work side by side—we actively support and uplift one another. Collaboration at Talent Trace is more than just a value; it's how we succeed. Whether we're brainstorming solutions, sharing insights, or tackling challenges together, we believe the best results come from combining our strengths and working as one united team.",
          },
        ]}
        columns={3}
        bgColor="gray"
      />
      {/* CTA Section  */}
      <CTASection
        title="Start Your Journey with Talent Trace"
        description="Become part of a team that's shaping the future of recruitment. Let's
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
