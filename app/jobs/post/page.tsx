import React from 'react'
import { PostJobForm } from './PostJobForm'
import SubHero from '@/components/Header/SubHero'
import TextAndPic from '@/components/shared/ContentCards/TextAndPic'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import MainButton from '@/components/shared/Buttons/MainButton'

const PostJobs = () => {
  // TODO: Insert real testimonial
  const serviceCards = [
    {
      title: 'Executive Search',
      description:
        'For C-suite, senior leadership, and high-impact roles, our executive search services go beyond traditional recruitment methods to find the right professionals who can drive transformation and innovation in your organization.',
      bullets: [
        'Access an exclusive network of highly skilled professionals.',
        'Tailored search strategies to meet your specific requirements.',
      ],
    },
    {
      title: 'Contingent Search',
      description:
        'Avoid upfront costs and only pay once we successfully place the right candidate. Ideal for junior to mid-level positions, our contingent search service ensures quality and efficiency.',
      bullets: [
        'Flexible, risk-free hiring model.',
        'Dedicated support to streamline the recruitment process.',
      ],
    },
    {
      title: 'Consultancy',
      description:
        'Get expert guidance on optimizing your recruitment strategy and building high-performing teams. Our consultancy services help you develop effective talent acquisition and retention strategies.',
      bullets: [
        'Comprehensive recruitment strategy development.',
        'Expert advice on market trends and best practices.',
      ],
    },
  ]
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <SubHero
        headline="Find Exceptional Talent with Talent Trace"
        description="From executive leaders to skilled professionals, we connect you with
        candidates who match your vision and drive growth in your organization."
        primaryButton="Get Started Today"
        secondaryButton="Request a Consultation"
      />

      <section className="md:py-12" id="post-job-form">
        <PostJobForm />
      </section>

      {/* Replace Introduction component with TextAndPic */}
      <section className="md:py-12">
        <h1 className="pb-8 pt-16 text-center text-3xl font-bold md:text-5xl md:font-normal">
          Why Talent Trace?
        </h1>
        <div className="mx-auto px-8 lg:h-[32rem] lg:w-2/3">
          <TextAndPic
            title="Finding talent doesn't have to be hard"
            text={`Finding the right talent doesn't have to be a challenge. At Talent Trace, we specialize in matching your organization with candidates who not only meet your technical requirements but also align with your goals, values, and culture.
  
  Whether you're hiring for an executive role or filling a mid-level position, we deliver tailored solutions to save you time, effort, and resources.`}
            footer="Tracing Talent. Paving Careers."
            image="/jobs/finding talent.jpg"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12">
        <h2 className="text-center text-3xl font-bold">
          Our Talent Acquisition Services
        </h2>
        <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-8 px-8 md:grid-cols-2">
          {serviceCards.map((card, index) => (
            <Card key={index} className="rounded-lg bg-white p-6 shadow-lg">
              <CardHeader>
                <h3 className="text-2xl font-bold">{card.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="mt-2">{card.description}</p>
                <ul className="mt-4 list-disc pl-5">
                  {card.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex}>{bullet}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12">
        <h2 className="text-center text-3xl font-bold">How It Works</h2>
        <ol className="mx-auto mt-8 max-w-3xl space-y-6 px-8 text-lg">
          <li>
            <strong>1. Share Your Hiring Needs:</strong> Tell us about the role,
            skills, and experience you’re looking for. Our team will craft a
            tailored recruitment strategy.
          </li>
          <li>
            <strong>2. Candidate Screening and Shortlisting:</strong> We
            leverage our extensive network and advanced tools to screen,
            evaluate, and present the top candidates that match your
            requirements.
          </li>
          <li>
            <strong>3. Final Selection:</strong> You choose the best fit from
            our curated shortlist. We&apos;ll assist in managing interviews,
            negotiations, and onboarding to ensure a smooth hiring process.
          </li>
        </ol>
      </section>

      {/* Testimonial Section */}
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

      {/* CTA Section */}
      <section className="bg-blue py-12 text-center text-white md:px-6">
        <h2 className="text-3xl font-bold">Ready to Find Your Next Hire?</h2>
        <p className="mt-4 text-lg">
          Let’s help you build a stronger, more capable team.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <MainButton full buttonText="Find Talent Now" link="#post-job-form" />
          <MainButton
            link="https://calendly.com/jakobnunnendorf/call"
            secondary
            buttonText="Speak to a Specialist"
          />
        </div>
      </section>
    </div>
  )
}

export default PostJobs
