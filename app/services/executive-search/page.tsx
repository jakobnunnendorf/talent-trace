import MainButton from '@/components/shared/Buttons/MainButton'
import SubHero from '@/components/shared/Header/SubHero'
import React from 'react'
import FeatureGrid from '@/components/shared/sections/FeatureGrid'
import ComparisonTable from '@/components/shared/ComparisonTable'

const whyChooseUsFeatures = [
  {
    title: 'Premium Service with Success Guarantee',
    description:
      'With our retained search model, you receive top-tier service and a 100% success guarantee, all at a cost lower than contingent recruitment. You get focused, personalized attention and a seamless hiring experience.',
  },
  {
    title: 'We Cover the Extras',
    description:
      "Worried about job posting costs? Don't be. We cover all the expenses for job ads and outreach, so you don't have to. This means you can focus on what matters—finding the right person—while we handle the rest.",
  },
  {
    title: 'Full Commitment, No Guesswork',
    description:
      "With us, you're not just another project. We take the time to understand your needs and take full accountability for everything—from interviewing every applicant to proactively reaching out to top talent. You'll only meet the candidates we know are a perfect fit.",
  },
  {
    title: 'We Make It Simple',
    description:
      'Instead of sorting through stacks of resumes, we save you time by presenting only the best five candidates for the role. This focused approach ensures you meet top-tier talent without wasting time on unsuitable matches.',
    bullets: [
      'Engagement Fee: To kickstart your search and prioritize your needs.',
      "Progress Fee: Ensures we're hitting milestones and staying on track.",
      'Completion Fee: Paid only when we successfully place the right candidate.',
    ],
  },
  {
    title: 'A Proven Partner',
    description:
      "With a 100% success rate, we've consistently delivered results for every client we've worked with. We also go beyond recruitment, providing insights on market salaries, industry trends, and talent availability, so you're equipped with everything you need to make informed decisions.",
  },
]

const comparisonData = {
  title: 'Contingent Search vs. Retained Executive Search',
  headers: ['Aspect', 'Contingent Search', 'Retained Executive Search'],
  rows: [
    ['Fees', 'Higher', 'Lower'],
    ['Payment Model', 'Lump Sum', 'Divided into 2 parts'],
    ['Commitment', 'Non-exclusive', 'Exclusive'],
    ['Candidate Quality', 'Volume-focused', 'Quality-focused'],
    ['Specialization', 'Generalist', 'Specialized'],
    ['Recruiter Focus', 'Divided', 'Dedicated'],
    ['Market Insights', 'Limited', 'Comprehensive'],
    ['Time Efficiency', 'Extended', 'Streamlined'],
    ['Guarantee', 'None', '100% Success'],
    ['Services', 'Limited', 'Comprehensive'],
    ['Best For', 'High-volume roles', 'Executive roles'],
  ],
}

const ExecutiveSearchPage: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <SubHero
        headline="Executive Search Services"
        description="At Talent Trace, we understand that finding the right
          executive talent is critical to the success of your organization.
          Leadership roles demand more than just technical expertise—they
          require vision, strategy, and cultural alignment. That&#39;s why our
          Executive Search services go beyond traditional recruitment to connect
          you with professionals who are not just qualified but are the perfect
          fit for your unique organizational goals."
        primaryButton="Find Executive"
        primaryButtonLink="/jobs/post"
        secondaryButton="Contact Us"
        secondaryButtonLink="/contact-us"
      />

      <FeatureGrid
        title="Why Choose Talent Trace?"
        subtitle="At Talent Trace, we've designed our retained executive search to deliver a premium service that's surprisingly more cost-effective than traditional contingent recruitment. And the best part? We've never failed to place the right candidate for our clients."
        features={whyChooseUsFeatures}
        columns={3}
        bgColor="white"
      />

      {/* Our Process */}
      <section className="bg-gray-100 px-6 py-12">
        <h2 className="text-center text-3xl font-bold">
          Why Retained Search Makes Sense
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-lg">
          When you partner with Talent Trace, you&apos;re not just getting a
          recruitment service—you&apos;re getting a team that&apos;s invested in
          your success. We offer premium service, guaranteed results, and lower
          costs than contingent recruitment, all while making the process as
          smooth and stress-free as possible.
        </p>
      </section>

      <section className="px-6 py-12">
        <h2 className="mt-8 text-center text-3xl font-bold">
          Let&apos;s Work Together
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-lg">
          If you&apos;re looking for a smarter, more human way to hire,
          let&apos;s talk. At Talent Trace, we&apos;re here to save you time,
          money, and effort while helping you secure the talent you need to
          grow. Reach out today and let&apos;s get started.
        </p>
      </section>

      <ComparisonTable
        title={comparisonData.title}
        headers={comparisonData.headers}
        rows={comparisonData.rows}
      />

      {/* Who We Serve */}
      <section className="px-6 py-12">
        <h2 className="text-center text-3xl font-bold">
          Why Retained Executive Search?
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-lg">
          Retained search offers premium quality at a lower cost, covering job
          posting expenses and delivering exceptional results with a 100%
          success rate. Contact Talent Trace today to learn how we can transform
          your hiring process!
        </p>
      </section>

      {/* CTA Section */}
      <section className="bg-blue px-6 py-12 text-center text-white">
        <h2 className="text-3xl font-bold">Start Your Search Today</h2>
        <p className="mt-4 text-lg">
          Don&apos;t settle for anything less than the best. Let Talent Trace
          help you find leaders who align with your vision and elevate your
          organization to new heights.
        </p>
        <MainButton
          buttonText="Find Your Leader"
          className="mx-auto mt-6"
          link="/jobs/post"
        />
      </section>
    </div>
  )
}

export default ExecutiveSearchPage
