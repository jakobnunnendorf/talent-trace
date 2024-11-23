import React from 'react'

const PostJobs = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-blue px-6 py-12 pt-48 text-center text-white">
        <h1 className="text-4xl font-bold">
          Find Exceptional Talent with Talent Trace
        </h1>
        <p className="mt-4 text-lg">
          From executive leaders to skilled professionals, we connect you with
          candidates who match your vision and drive growth in your
          organization.
        </p>
        <div className="mt-6 space-x-4">
          <button className="bg-green rounded px-6 py-3 font-semibold text-white transition hover:bg-green-600">
            Get Started Today
          </button>
          <button className="rounded border-2 border-white px-6 py-3 font-semibold transition hover:bg-white hover:text-blue">
            Request a Consultation
          </button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="px-6 py-12">
        <h2 className="text-center text-3xl font-bold">Why Talent Trace?</h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-lg">
          Finding the right talent doesn’t have to be a challenge. At Talent
          Trace, we specialize in matching your organization with candidates who
          not only meet your technical requirements but also align with your
          goals, values, and culture.
        </p>
        <p className="mx-auto mt-4 max-w-3xl text-center text-lg">
          Whether you're hiring for an executive role or filling a mid-level
          position, we deliver tailored solutions to save you time, effort, and
          resources.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 px-6 py-12">
        <h2 className="text-center text-3xl font-bold">
          Our Talent Acquisition Services
        </h2>
        <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded bg-white p-6 shadow-lg">
            <h3 className="text-2xl font-bold">Executive Search</h3>
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
          </div>
          <div className="rounded bg-white p-6 shadow-lg">
            <h3 className="text-2xl font-bold">Contingent Search</h3>
            <p className="mt-2">
              Avoid upfront costs and only pay once we successfully place the
              right candidate. Ideal for junior to mid-level positions, our
              contingent search service ensures quality and efficiency.
            </p>
            <ul className="mt-4 list-disc pl-5">
              <li>Flexible, risk-free hiring model.</li>
              <li>Dedicated support to streamline the recruitment process.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-6 py-12">
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
            our curated shortlist. We’ll assist in managing interviews,
            negotiations, and onboarding to ensure a smooth hiring process.
          </li>
        </ol>
      </section>

      {/* Testimonial Section */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-3xl text-center">
          <blockquote className="text-xl italic">
            "Talent Trace helped us find an executive leader who transformed our
            business operations. Their professionalism and dedication made all
            the difference!"
          </blockquote>
          <p className="mt-4 font-bold">– [Name], [Title], [Company Name]</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue px-6 py-12 text-center text-white">
        <h2 className="text-3xl font-bold">Ready to Find Your Next Hire?</h2>
        <p className="mt-4 text-lg">
          Let’s help you build a stronger, more capable team.
        </p>
        <div className="mt-6 space-x-4">
          <button className="bg-green rounded px-6 py-3 font-semibold text-white transition hover:bg-green-600">
            Find Talent Now
          </button>
          <button className="rounded border-2 border-white px-6 py-3 font-semibold transition hover:bg-white hover:text-blue">
            Speak to a Specialist
          </button>
        </div>
      </section>
    </div>
  )
}

export default PostJobs
