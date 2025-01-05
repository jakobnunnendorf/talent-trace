import React from 'react'
import { ConsultationForm } from '../../../components/Jobs/Post/ConsultationForm'
import SubHero from '@/components/shared/Header/SubHero'
import TextAndPic from '@/components/shared/ContentCards/TextAndPic'
import FeatureGrid from '@/components/shared/sections/FeatureGrid'
import TextSection from '@/components/shared/sections/TextSection'
import CTASection from '@/components/shared/sections/CTASection'
import { howToJoinSteps, serviceCards } from './content'

const PostJobs = () => {
  // TODO: Insert real testimonial

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <SubHero
        headline="Find Exceptional Talent with Talent Trace"
        description="From executive leaders to skilled professionals, we connect you with
        candidates who match your vision and drive growth in your organization."
        primaryButton="Get Started Today"
        primaryButtonLink="#post-job-form"
        secondaryButton="Request a Consultation"
        secondaryButtonLink="contact-us"
      />

      <section className="md:py-12" id="post-job-form">
        <ConsultationForm />
      </section>

      {/* Replace Introduction component with TextAndPic */}
      <section className="md:py-12">
        <h1 className="pb-8 pt-16 text-center text-3xl font-bold md:text-5xl md:font-normal">
          Why Talent Trace?
        </h1>
        <div className="mx-auto px-8 lg:h-[32rem] lg:w-2/3">
          <TextAndPic
            title="Finding talent doesn't have to be hard"
            text={[
              "Finding the right talent doesn't have to be a challenge. At Talent Trace, we specialize in matching your organization with candidates who not only meet your technical requirements but also align with your goals, values, and culture.",
              "Whether you're hiring for an executive role or filling a mid-level position, we deliver tailored solutions to save you time, effort, and resources.",
            ]}
            footer="Tracing Talent. Paving Careers."
            image="/jobs/finding talent.jpg"
          />
        </div>
      </section>

      <FeatureGrid
        title="Our Talent Acquisition Services"
        features={serviceCards}
      />

      <TextSection heading="How It Works" bulletPoints={howToJoinSteps} ol />

      <section className="py-12">
        <div className="mx-auto max-w-3xl px-8 text-center">
          <blockquote className="text-xl italic">
            &quot;Talent Trace helped us find an executive leader who
            transformed our business operations. Their professionalism and
            dedication made all the difference!&quot;
          </blockquote>
          <p className="mt-4 font-bold">– [Name], [Title], [Company Name]</p>
        </div>
      </section>

      <CTASection
        title="Ready to Find Your Next Hire?"
        description="Let’s help you build a stronger, more capable team."
        primaryButton={{
          text: 'Find Talent Now',
          href: '#post-job-form',
        }}
        secondaryButton={{
          text: 'Speak to a Specialist',
          href: 'contact-us',
        }}
      />
    </div>
  )
}

export default PostJobs
