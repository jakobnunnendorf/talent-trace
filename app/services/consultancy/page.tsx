import SubHero from '@/components/shared/Header/SubHero'
import { Button } from '@/components/ui/button'
import React from 'react'

const ConsultancyPage: React.FC = () => {
  // TODO: add real success stories
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <SubHero
        headline="Consultancy Services Tailored to Your Success"
        description="Transforming Challenges into Opportunities
        Our bespoke consultancy services empower businesses across industries
          to streamline operations, enhance productivity, and achieve measurable
          results.
        "
        primaryButton="Request a Consultation"
        primaryButtonLink="https://calendly.com/jakobnunnendorf/call"
        secondaryButton="Explore Our Services"
        secondaryButtonLink="/#service-card"
      />

      {/* Introduction Section */}
      <section className="px-6 py-12">
        <h2 className="text-center text-3xl font-bold">Introduction</h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-lg">
          At Talent Trace, we go beyond recruitment. Our comprehensive
          consultancy services are designed to help businesses and professionals
          in industries such as commodity trading, shipping, robotics, and IT
          thrive in today&apos;s competitive landscape.
        </p>
        <p className="mx-auto mt-4 max-w-3xl text-center text-lg">
          From market research to employee engagement, we deliver actionable
          insights and tailored solutions that eliminate inefficiencies and
          enable seamless workflows. Let us handle your operational challenges
          so you can focus on what matters most—growth and innovation.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 px-6 py-12">
        <h2 className="text-center text-3xl font-bold">Our Services</h2>
        <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          <div className="rounded bg-white p-6 shadow-lg">
            <h3 className="text-2xl font-bold">Market Research and Analysis</h3>
            <p className="mt-2">
              Gain a competitive edge with in-depth market insights tailored to
              your industry. Whether you&apos;re entering a new market or
              looking to expand, our research services provide the clarity and
              data you need to make informed decisions.
            </p>
          </div>
          <div className="rounded bg-white p-6 shadow-lg">
            <h3 className="text-2xl font-bold">
              Employee Engagement Solutions
            </h3>
            <p className="mt-2">
              Motivated employees drive success. We design and implement
              effective engagement strategies to enhance productivity,
              retention, and workplace satisfaction.
            </p>
          </div>
          <div className="rounded bg-white p-6 shadow-lg">
            <h3 className="text-2xl font-bold">
              Benchmarking and Salary Surveys
            </h3>
            <p className="mt-2">
              Understand your industry landscape and ensure competitive
              compensation with our detailed benchmarking and salary surveys.
              Stay ahead in attracting and retaining top talent.
            </p>
          </div>
          <div className="rounded bg-white p-6 shadow-lg">
            <h3 className="text-2xl font-bold">Workflow Optimization</h3>
            <p className="mt-2">
              Streamline your operations with consultancy services focused on
              eliminating inefficiencies, reducing resource wastage, and
              enhancing collaboration across teams.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="px-6 py-12">
        <h2 className="text-center text-3xl font-bold">Industries We Serve</h2>
        <ul className="mx-auto mt-6 max-w-3xl list-inside list-disc text-lg">
          <li>
            Commodity Trading: Strategic guidance for navigating volatile
            markets.
          </li>
          <li>
            Shipping: Streamlining processes for greater operational efficiency.
          </li>
          <li>
            Robotics: Helping innovators bring cutting-edge technologies to
            life.
          </li>
          <li>
            IT and Technology: Driving digital transformation and workforce
            optimization.
          </li>
        </ul>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-100 px-6 py-12">
        <h2 className="text-center text-3xl font-bold">
          Why Choose Talent Trace for Consultancy?
        </h2>
        <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          <div className="rounded bg-white p-6 shadow-lg">
            <h3 className="text-2xl font-bold">
              Tailored Solutions for Your Needs
            </h3>
            <p className="mt-2">
              We understand that every business is unique. That’s why we take a
              personalized approach to crafting strategies that work for you.
            </p>
          </div>
          <div className="rounded bg-white p-6 shadow-lg">
            <h3 className="text-2xl font-bold">Industry Expertise</h3>
            <p className="mt-2">
              With experience in diverse industries, our team brings a wealth of
              knowledge and insights to every project.
            </p>
          </div>
          <div className="rounded bg-white p-6 shadow-lg">
            <h3 className="text-2xl font-bold">Results-Oriented Approach</h3>
            <p className="mt-2">
              We focus on delivering measurable outcomes, ensuring you see
              tangible improvements in operations and efficiency.
            </p>
          </div>
          <div className="rounded bg-white p-6 shadow-lg">
            <h3 className="text-2xl font-bold">A Partner You Can Trust</h3>
            <p className="mt-2">
              We prioritize transparency, professionalism, and collaboration in
              every step of our engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Success Stories*/}
      <section className="px-6 py-12">
        <h2 className="text-center text-3xl font-bold">Success Stories</h2>
        <blockquote className="mx-auto mt-6 max-w-3xl text-center text-lg italic">
          &quot;Talent Trace&apos;s consultancy services completely transformed
          our workflows. Their expertise in market research and engagement
          strategies enabled us to boost efficiency and save significant
          time.&quot;
        </blockquote>
        <p className="mt-4 text-center font-bold">
          – [Name], [Title], [Company Name]
        </p>
        <blockquote className="mx-auto mt-6 max-w-3xl text-center text-lg italic">
          &quot;With Talent Trace&apos;s benchmarking services, we gained
          invaluable insights into industry standards, helping us attract and
          retain top talent in a highly competitive market.&quot;
        </blockquote>
        <p className="mt-4 text-center font-bold">
          – [Name], [Title], [Company Name]
        </p>
      </section>

      {/* CTA Section */}
      <section className="bg-blue px-6 py-12 text-center text-white">
        <h2 className="text-3xl font-bold">
          Let’s Build Your Success Together
        </h2>
        <p className="mt-4 text-lg">
          Take the first step toward operational excellence. Whether you need
          market insights, employee engagement strategies, or streamlined
          workflows, we’re here to help.
        </p>
        <div className="mt-6 space-x-4">
          <Button className="hover:bg-green-600 rounded bg-green px-6 py-3 font-semibold text-white transition">
            Request a Consultation
          </Button>
          <Button className="rounded border-2 border-white px-6 py-3 font-semibold transition hover:bg-white hover:text-blue">
            Speak to Our Experts
          </Button>
        </div>
      </section>
    </div>
  )
}

export default ConsultancyPage
