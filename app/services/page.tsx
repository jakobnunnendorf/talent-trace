import React from 'react'
import SubHero from '@/components/shared/Header/SubHero'
import FeatureGrid from '@/components/shared/sections/FeatureGrid'
import ComparisonTable from '@/components/shared/ComparisonTable'
import MainButton from '@/components/shared/Buttons/MainButton'
import TextSection from '@/components/shared/sections/TextSection'
import CTASection from '@/components/shared/sections/CTASection'
import { consultancyContent } from './consultancy/content'

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

const { introduction, benchmarking, industries } = consultancyContent
// const { introduction, benchmarking, industries, testimonials } =
//   consultancyContent

export default function page() {
  return (
    <div>
      <SubHero
        headline="Our Services"
        description="We understand that the right talent is critical to the success of any organization. Our Executive Search, Contingent Search and Consultancy services might be able to help you find the perfect fit for your team."
      />
      <FeatureGrid
        title="Our Core Services"
        features={[
          {
            title: 'Executive Search',
            description:
              "At Talent Trace, we understand that finding the right executive talent is critical to the success of your organization. Leadership roles demand more than just technical expertise—they require vision, strategy, and cultural alignment. That   's why our Executive Search services go beyond traditional recruitment to connect you with professionals who are not just qualified but are the perfect fit for your unique organizational goals.",
            button: {
              buttonText: 'Find out more',
              buttonLink: '/services/executive-search',
            },
          },
          {
            title: 'Contingent Search',
            description:
              "At Talent Trace, we know that every hiring need is different. If you're looking to fill a role quickly without upfront costs, our contingent search service is the perfect fit. It's a simple, flexible, and efficient way to connect with talented candidates while keeping things easy and stress-free.",
            button: {
              buttonText: 'Find out more',
              buttonLink: '',
            },
          },
          {
            title: 'Consultancy',
            description:
              'Transforming Challenges into Opportunities. Our bespoke consultancy services empower businesses across industries to streamline operations, enhance productivity, and achieve measurable results.',
            button: {
              buttonText: 'Find out more',
              buttonLink: '',
            },
          },
        ]}
      />
      <section>
        <h2 className="mx-auto pb-12 pt-24 text-center text-5xl font-bold text-blue md:w-2/3 md:pb-16 md:pt-48 md:text-start md:text-6xl">
          Executive Search
        </h2>

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
            recruitment service—you&apos;re getting a team that&apos;s invested
            in your success. We offer premium service, guaranteed results, and
            lower costs than contingent recruitment, all while making the
            process as smooth and stress-free as possible.
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
            success rate. Contact Talent Trace today to learn how we can
            transform your hiring process!
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
      </section>
      <section>
        <h2 className="mx-auto pb-12 pt-24 text-center text-5xl font-bold text-blue md:w-2/3 md:pb-16 md:pt-48 md:text-start md:text-6xl">
          Contingent Search
        </h2>
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
      </section>
      <section>
        <h2 className="mx-auto pb-12 pt-24 text-center text-5xl font-bold text-blue md:w-2/3 md:pb-16 md:pt-48 md:text-start md:text-6xl">
          Consultancy
        </h2>

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
          secondaryButton={{
            text: 'Speak to Our Experts',
            href: '/contact-us',
          }}
        />
      </section>
    </div>
  )
}
