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
        description="At Talent Trace, we know that every hiring need is different. If you're looking to fill a role quickly without upfront costs, our contingent search service is the perfect fit. It's a simple, flexible, and efficient way to connect with talented candidates while keeping things easy and stress-free."
        primaryButton="Start Your Search"
        primaryButtonLink="/jobs/post"
        secondaryButton="Refer a Friend"
        secondaryButtonLink="mailto:?subject=Talent%20Trace%20Contingent%20Search%20Referral&body=I%20thought%20you%20might%20be%20interested%20in%20Talent%20Trace's%20Contingent%20Search%20services.%20They%20offer%20no-upfront-cost%20recruitment%20solutions.%20Learn%20more%20at%3A%20https%3A%2F%2Ftalent-trace.com%2Fservices%2Fcontingent-search"
      />

      <FeatureGrid
        title="Why Choose Contingent Search with Talent Trace?"
        features={whyChooseUsFeatures}
        columns={3}
        bgColor="gray"
      />

      <TextSection
        paragraphs={[
          "If you're after a flexible, low-risk way to hire, we're here to help. And if you're looking for top-tier executives or highly specialized talent, check out our retained executive search for a more personalized and focused approach.",
          "Let's chat! Contact us today to see how we can help you find the right talent quickly and easily.",
        ]}
      />

      <FeatureGrid
        title="How Talent Trace Supports Your Business with HR Consultancy Services"
        subtitle="At Talent Trace, we're committed to helping your business succeed by providing expert guidance in two key areas of HR: Compensation and Benefits and Training and Development. Our tailored consultancy services ensure you can attract, retain, and grow the talent your organization needs."
        features={[
          {
            title: 'Salary Benchmarking',
            description:
              "We understand that competitive and fair compensation is critical to attracting and retaining top talent. That's why we take a deep dive into industry standards, analyzing market trends to ensure your pay structures are both competitive and equitable. At Talent Trace, we provide you with actionable insights so you can confidently offer packages that align with your company's goals while meeting employee expectations.",
          },
          {
            title: 'Designing Benefits Packages',
            description:
              "A well-designed benefits package can make all the difference in employee satisfaction and loyalty. We work closely with you to craft tailored programs that address the unique needs of your workforce, whether it's flexible working arrangements, health benefits, or performance incentives. Our goal is to help you build a benefits package that keeps your team happy and engaged while enhancing retention.",
          },
          {
            title: 'Interview Skills for Hiring Managers',
            description:
              "Hiring the right talent starts with the interview process, and we're here to ensure your managers are fully equipped to excel in this crucial step. Through our training programs, we teach managers how to conduct structured, unbiased interviews that identify the best candidates while providing a positive experience for everyone involved. With Talent Trace, you'll build a hiring team that makes confident, informed decisions.",
          },
          {
            title: 'Employee Upskilling',
            description:
              'Your people are your greatest asset, and investing in their growth is vital. We work with you to design tailored training programs that address specific skill gaps, keep your team ahead of industry changes, and support career development. Our upskilling solutions are aligned with your business objectives, helping your workforce grow while driving organizational success.',
          },
        ]}
        columns={2}
        bgColor="gray"
      />

      <TextSection
        paragraphs={[
          'By partnering with Talent Trace, you gain more than just consultancy services—you gain a trusted advisor who is invested in the success of your team and your business.',
          'Get in touch today to see how we can help you build a thriving workforce and a stronger organization.',
        ]}
        bulletPoints={[
          "Ownership and Autonomy: We trust our people to take charge of their work. You'll have the freedom to make decisions and the support to see them through.",
          "Integrity and Purpose: We do the right thing, even when no one is watching. Our work isn't just about filling roles; it's about making meaningful connections that create lasting impact.",
        ]}
      />

      <CTASection
        title="Ready to Find the Right Candidate?"
        description="Take the hassle out of hiring with Talent Trace's Contingent Search services. Let's help you build a stronger, more capable team today."
        primaryButton={{ text: 'Start Your Search', href: '/jobs' }}
        secondaryButton={{ text: 'Talk to an Expert', href: '/contact-us' }}
      />
    </div>
  )
}

export default ContingentSearchPage
