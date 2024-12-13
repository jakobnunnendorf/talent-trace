import SubHero from '@/components/Header/SubHero'
import { Button } from '@/components/ui/button'
import React from 'react'

const ContingentSearchPage: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <SubHero
        headline="Contingent Search Services"
        description="Find the Right Talent Without the Upfront Costs
        With Talent Trace's Contingent Search services, you only pay when the
          right candidate is successfully placed. Save time, save resources, and
          focus on growing your business."
        primaryButton="Start Your Search"
        secondaryButton="Learn More About Contingent Search"
      />

      {/* What is Contingent Search? */}
      <section className="px-6 py-12">
        <h2 className="text-center text-3xl font-bold">
          What is Contingent Search?
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-lg">
          Contingent Search offers a risk-free recruitment model that eliminates
          upfront fees, ensuring you only pay when the right candidate is
          successfully hired. Ideal for junior to mid-level roles, this service
          combines flexibility and efficiency to meet your hiring needs without
          overextending your budget.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 px-6 py-12">
        <h2 className="text-center text-3xl font-bold">
          Why Choose Contingent Search with Talent Trace?
        </h2>
        <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded bg-white p-6 shadow-lg">
            <h3 className="text-2xl font-bold">No Upfront Costs</h3>
            <p className="mt-2">
              Say goodbye to hefty retainers or upfront recruitment fees. With
              Contingent Search, you only pay when a candidate is successfully
              placed in your organization.
            </p>
          </div>
          <div className="rounded bg-white p-6 shadow-lg">
            <h3 className="text-2xl font-bold">
              Efficient and Targeted Process
            </h3>
            <p className="mt-2">
              Our team of experts uses a strategic and data-driven approach to
              identify the best candidates for your role, ensuring a faster and
              more precise hiring process.
            </p>
          </div>
          <div className="rounded bg-white p-6 shadow-lg">
            <h3 className="text-2xl font-bold">
              Access to a Robust Talent Pool
            </h3>
            <p className="mt-2">
              Leverage our extensive network of highly qualified candidates to
              find the perfect fit for your team.
            </p>
          </div>
          <div className="rounded bg-white p-6 shadow-lg">
            <h3 className="text-2xl font-bold">Dedicated Support</h3>
            <p className="mt-2">
              We manage every step of the process, from sourcing to onboarding,
              so you can focus on running your business.
            </p>
          </div>
          <div className="rounded bg-white p-6 shadow-lg">
            <h3 className="text-2xl font-bold">Cost-Effective and Risk-Free</h3>
            <p className="mt-2">
              Avoid unnecessary expenses and pay only for results, ensuring a
              smart allocation of your recruitment budget.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-12">
        <h2 className="text-center text-3xl font-bold">How It Works</h2>
        <ol className="mx-auto mt-8 max-w-3xl space-y-6 text-lg">
          <li>
            <strong>1. Share Your Hiring Needs:</strong> Tell us about the role
            and ideal candidate profile. We’ll tailor a recruitment plan
            specifically for your organization.
          </li>
          <li>
            <strong>2. Search and Screen:</strong> We tap into our network and
            use advanced sourcing tools to identify top candidates. Every
            potential hire undergoes rigorous screening and evaluation.
          </li>
          <li>
            <strong>3. Interview and Hire:</strong> You receive a shortlist of
            qualified candidates ready for interviews. We’ll assist you
            throughout the selection process to ensure a seamless experience.
          </li>
          <li>
            <strong>4. Pay Only for Results:</strong> Once the perfect candidate
            is placed and a contract is signed, we collect our fee—no surprises,
            no upfront costs.
          </li>
        </ol>
      </section>

      {/* Who is Contingent Search For? */}
      <section className="bg-gray-100 px-6 py-12">
        <h2 className="text-center text-3xl font-bold">
          Who is Contingent Search For?
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-lg">
          Contingent Search is ideal for companies seeking to fill:
        </p>
        <ul className="mx-auto mt-6 max-w-3xl list-inside list-disc text-lg">
          <li>Junior Roles</li>
          <li>Mid-Level Management Positions</li>
          <li>Specialist Roles</li>
        </ul>
      </section>

      {/* Success Stories */}
      <section className="px-6 py-12">
        <h2 className="text-center text-3xl font-bold">Success Stories</h2>
        <blockquote className="mx-auto mt-6 max-w-3xl text-center text-lg italic">
          &apos;We needed to fill multiple junior positions fast, and Talent
          Trace delivered exceptional candidates within weeks. The no upfront
          cost model was a perfect fit for our budget.&apos;
        </blockquote>
        <p className="mt-4 text-center font-bold">
          – [Name], [Title], [Company Name]
        </p>
        <blockquote className="mx-auto mt-6 max-w-3xl text-center text-lg italic">
          &apos;Talent Trace’s Contingent Search saved us time and money while
          helping us find professionals who are now key contributors to our
          team’s success.&apos;
        </blockquote>
        <p className="mt-4 text-center font-bold">
          – [Name], [Title], [Company Name]
        </p>
      </section>

      {/* CTA Section */}
      <section className="bg-blue px-6 py-12 text-center text-white">
        <h2 className="text-3xl font-bold">
          Ready to Find the Right Candidate?
        </h2>
        <p className="mt-4 text-lg">
          Take the hassle out of hiring with Talent Trace’s Contingent Search
          services. Let’s help you build a stronger, more capable team today.
        </p>
        <div className="mt-6 space-x-4">
          <Button className="hover:bg-green-600 rounded bg-green px-6 py-3 font-semibold text-white transition">
            Start Your Search
          </Button>
          <Button className="rounded border-2 border-white px-6 py-3 font-semibold transition hover:bg-white hover:text-blue">
            Talk to an Expert
          </Button>
        </div>
      </section>
    </div>
  )
}

export default ContingentSearchPage
