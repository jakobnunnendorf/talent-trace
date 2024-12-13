import React from 'react'
import { PostJobForm } from './PostJobForm'
import SubHero from '@/components/Header/SubHero'
import Introduction from './Introduction'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const PostJobs = () => {
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

      {/* Introduction Section */}
      <Introduction />

      {/* Services Section */}
      <section className="bg-gray-100 px-6 pb-24">
        <h2 className="text-center text-3xl font-bold">
          Our Talent Acquisition Services
        </h2>
        <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          <Card className="rounded bg-white p-6 shadow-lg">
            <CardHeader>
              <h3 className="text-2xl font-bold">Executive Search</h3>
            </CardHeader>
            <CardContent>
              <p className="mt-2">
                For C-suite, senior leadership, and high-impact roles, our
                executive search services go beyond traditional recruitment
                methods to find the right professionals who can drive
                transformation and innovation in your organization.
              </p>
              <ul className="mt-4 list-disc pl-5">
                <li>
                  Access an exclusive network of highly skilled professionals.
                </li>
                <li>
                  Tailored search strategies to meet your specific requirements.
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="rounded bg-white p-6 shadow-lg">
            <CardHeader>
              <h3 className="text-2xl font-bold">Contingent Search</h3>
            </CardHeader>
            <CardContent>
              <p className="mt-2">
                Avoid upfront costs and only pay once we successfully place the
                right candidate. Ideal for junior to mid-level positions, our
                contingent search service ensures quality and efficiency.
              </p>
              <ul className="mt-4 list-disc pl-5">
                <li>Flexible, risk-free hiring model.</li>
                <li>
                  Dedicated support to streamline the recruitment process.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-6 py-24">
        <h2 className="text-center text-3xl font-bold">How It Works</h2>
        <ol className="mx-auto mt-8 max-w-3xl space-y-6 text-lg">
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
      <section className="bg-gray-100 px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <blockquote className="text-xl italic">
            {' '}
            {/*TODO: Insert real testimonial */}
            &quot;Talent Trace helped us find an executive leader who
            transformed our business operations. Their professionalism and
            dedication made all the difference!&quot;
          </blockquote>
          <p className="mt-4 font-bold">– [Name], [Title], [Company Name]</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue px-6 py-24 text-center text-white">
        <h2 className="text-3xl font-bold">Ready to Find Your Next Hire?</h2>
        <p className="mt-4 text-lg">
          Let’s help you build a stronger, more capable team.
        </p>
        <div className="mt-6 space-x-4">
          <button className="hover:bg-green-600 rounded bg-green px-6 py-3 font-semibold text-white transition">
            Find Talent Now
          </button>
          <button className="rounded border-2 border-white px-6 py-3 font-semibold transition hover:bg-white hover:text-blue">
            Speak to a Specialist
          </button>
        </div>
        <PostJobForm />
      </section>
    </div>
  )
}

export default PostJobs
