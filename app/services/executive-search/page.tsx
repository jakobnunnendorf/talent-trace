import SubHero from '@/components/Header/SubHero'
import React from 'react'

const ExecutiveSearchPage: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <SubHero
        headline="Executive Search Services"
        description="At <strong>Talent Trace</strong>, we understand that finding the right
          executive talent is critical to the success of your organization.
          Leadership roles demand more than just technical expertise—they
          require vision, strategy, and cultural alignment. That's why our
          Executive Search services go beyond traditional recruitment to connect
          you with professionals who are not just qualified but are the perfect
          fit for your unique organizational goals."
        primaryButton="Find Executive"
        secondaryButton="Contact Us" // TODO: add executive search buttons
      />

      {/* Why Choose Us */}
      <section className="px-6 py-12">
        <h2 className="text-center text-3xl font-bold">
          Why Choose Talent Trace?
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-lg">
          Your Partner in Leadership Recruitment
        </p>
        <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded bg-white p-6 shadow-lg">
            <h3 className="text-2xl font-bold">
              A Proven Network of Top Talent
            </h3>
            <p className="mt-2">
              We have cultivated a vast network of highly-skilled and
              experienced professionals from diverse industries, enabling us to
              connect you with exceptional leaders who can bring innovation and
              success to your organization.
            </p>
          </div>
          <div className="rounded bg-white p-6 shadow-lg">
            <h3 className="text-2xl font-bold">Tailored to Your Needs</h3>
            <p className="mt-2">
              Every organization is different. We tailor our search strategies
              to your specific needs, ensuring that every candidate aligns with
              your culture, goals, and vision.
            </p>
          </div>
          <div className="rounded bg-white p-6 shadow-lg">
            <h3 className="text-2xl font-bold">Beyond the Resume</h3>
            <p className="mt-2">
              Our holistic approach includes in-depth candidate evaluations,
              leadership assessments, and cultural fit analysis to ensure the
              candidate thrives in your organization.
            </p>
          </div>
          <div className="rounded bg-white p-6 shadow-lg">
            <h3 className="text-2xl font-bold">Confidentiality Guaranteed</h3>
            <p className="mt-2">
              We operate with the highest level of confidentiality, ensuring
              your search process remains secure and professional.
            </p>
          </div>
          <div className="rounded bg-white p-6 shadow-lg">
            <h3 className="text-2xl font-bold">Streamlined and Efficient</h3>
            <p className="mt-2">
              Hiring the right leader is time-sensitive. Our expert recruiters
              ensure you get the best candidates without unnecessary delays.
            </p>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="bg-gray-100 px-6 py-12">
        <h2 className="text-center text-3xl font-bold">
          Our Comprehensive Process
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-lg">
          How We Deliver Exceptional Talent
        </p>
        <ol className="mx-auto mt-8 max-w-3xl space-y-6 text-lg">
          <li>
            <strong>1. Understanding Your Needs:</strong> We start with an
            in-depth consultation to understand your leadership requirements,
            growth objectives, and company culture.
          </li>
          <li>
            <strong>2. Extensive Research and Outreach:</strong> Our team
            conducts thorough market research and taps into our exclusive
            network to identify high-potential candidates.
          </li>
          <li>
            <strong>3. In-Depth Candidate Assessments:</strong> Every candidate
            goes through rigorous evaluations, including leadership capability
            assessments, reference checks, and interviews.
          </li>
          <li>
            <strong>4. Shortlist and Recommendations:</strong> We provide a
            carefully curated list of top candidates, complete with detailed
            profiles and insights.
          </li>
          <li>
            <strong>5. Final Selection and Support:</strong> We assist you
            throughout interviews, negotiations, and onboarding, ensuring a
            smooth and successful transition.
          </li>
        </ol>
      </section>

      {/* Who We Serve */}
      <section className="px-6 py-12">
        <h2 className="text-center text-3xl font-bold">Who We Serve</h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-lg">
          Our Executive Search services are ideal for organizations seeking to
          fill high-impact roles such as:
        </p>
        <ul className="mx-auto mt-6 max-w-3xl list-inside list-disc text-lg">
          <li>Chief Executive Officers (CEOs)</li>
          <li>Chief Financial Officers (CFOs)</li>
          <li>Chief Operating Officers (COOs)</li>
          <li>Directors and Senior Managers</li>
          <li>Specialized Leadership Positions</li>
        </ul>
      </section>

      {/* Success Stories */}
      <section className="bg-gray-100 px-6 py-12">
        <h2 className="text-center text-3xl font-bold">Success Stories</h2>
        <blockquote className="mx-auto mt-6 max-w-3xl text-center text-lg italic">
          &quot;Talent Trace connected us with a visionary CEO who transformed
          our operations within the first six months. Their personalized
          approach and industry insights made all the difference.&quot;
        </blockquote>
        <p className="mt-4 text-center font-bold">
          – [Name], [Title], [Company Name]
        </p>
        <blockquote className="mx-auto mt-6 max-w-3xl text-center text-lg italic">
          &quot;We were struggling to find a CFO with both financial acumen and
          leadership skills. Talent Trace delivered exactly what we needed—and
          faster than we expected!&quot;
        </blockquote>
        <p className="mt-4 text-center font-bold">
          – [Name], [Title], [Company Name]
        </p>
      </section>

      {/* CTA Section */}
      <section className="bg-blue px-6 py-12 text-center text-white">
        <h2 className="text-3xl font-bold">Start Your Search Today</h2>
        <p className="mt-4 text-lg">
          Don’t settle for anything less than the best. Let Talent Trace help
          you find leaders who align with your vision and elevate your
          organization to new heights.
        </p>
        <button className="hover:bg-green-600 mt-6 rounded bg-green px-6 py-3 font-semibold text-white transition">
          Find Your Leader
        </button>
      </section>
    </div>
  )
}

export default ExecutiveSearchPage
