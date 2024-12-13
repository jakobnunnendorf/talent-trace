import SubHero from '@/components/Header/SubHero'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const AboutUsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <SubHero
        headline="About Us"
        description=" Your Global Partner in Talent and HR Solutions"
      />

      {/* Who We Are */}
      <section className="px-6 py-12">
        <h2 className="text-center text-3xl font-bold">Who We Are</h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-lg">
          Talent Trace is a specialized talent search and selection consulting
          firm headquartered in Singapore. With a global reach, we deliver
          exceptional recruitment and HR solutions to{' '}
          <strong>Government Bodies</strong>,{' '}
          <strong>Multi-National Corporations (MNCs)</strong>, and{' '}
          <strong>Small-Medium Enterprises (SMEs)</strong>.
        </p>
        <p className="mx-auto mt-4 max-w-3xl text-center text-lg">
          At Talent Trace, we don’t just fill roles—we redefine the recruitment
          landscape. By integrating methodologies inspired by{' '}
          <strong>management consulting</strong>, we bring precision, strategy,
          and innovation to every search process. Our mission is to connect
          top-tier talent with the organizations that need them most, no matter
          how remote or challenging the requirement.
        </p>
      </section>

      {/* Unique Approach */}
      <section className="bg-gray-100 px-6 py-12">
        <h2 className="text-center text-3xl font-bold">Our Unique Approach</h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-lg">
          We have trained our consultants—fondly known as{' '}
          <strong>Talent Tracers</strong>—to operate with deep expertise in
          business mechanics, equipping them to envision and identify
          outstanding candidates in even the most niche markets. By blending{' '}
          <strong>technology</strong>, <strong>strategy</strong>, and{' '}
          <strong>personalized service</strong>, we ensure that every placement
          is aligned with your goals and values.
        </p>
        <ul className="mx-auto mt-6 max-w-3xl list-inside list-disc text-lg">
          <li>
            <strong>Innovative Search Methodologies:</strong> Combining
            data-driven insights with consulting expertise.
          </li>
          <li>
            <strong>Global Talent Access:</strong> Sourcing exceptional
            professionals, even in remote or specialized industries.
          </li>
          <li>
            <strong>Personalized Recruitment Solutions:</strong> Tailored to
            your business needs for a seamless experience.
          </li>
        </ul>
      </section>

      {/* Vision Section */}
      <section className="px-6 py-12">
        <h2 className="text-center text-3xl font-bold">Our Vision</h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-lg">
          At Talent Trace, our vision is to be the{' '}
          <strong>one-stop HR consultancy</strong> for employers, offering
          comprehensive services that drive organizational success.
        </p>
        <ul className="mx-auto mt-6 max-w-3xl list-inside list-disc text-lg">
          <li>
            <strong>Recruitment:</strong> Finding the perfect fit for your team.
          </li>
          <li>
            <strong>Payroll Solutions:</strong> Simplifying payroll processes
            with accuracy and compliance.
          </li>
          <li>
            <strong>Training:</strong> Empowering employees with the skills they
            need to succeed.
          </li>
          <li>
            <strong>Human Resource Consulting:</strong> Strategic guidance for
            workforce management.
          </li>
          <li>
            <strong>Corporate Administration Services:</strong> Supporting
            businesses with seamless operational services.
          </li>
        </ul>
      </section>

      {/* Message from Managing Director */}
      <section className="bg-gray-100 px-6 py-12">
        <div className="mx-auto grid w-2/3 grid-cols-2">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-center text-3xl font-bold">
              Message from Our Managing Director
            </h2>
            <div className="mx-auto mt-6 max-w-3xl text-center">
              <p className="text-lg italic">
                &quot;At Talent Trace, our number one priority is to deliver
                exceptional service to both our clients and candidates. Whether
                you&apos;re hiring talent or seeking a new opportunity, our
                Talent Tracers are here to ensure a seamless experience at every
                step.&quot;
              </p>
              <p className="mt-4 font-bold">– Pravin Nyanes</p>
              <p className="italic">Managing Director, Talent Trace</p>
            </div>
          </div>
          <figure className="flex items-center justify-center">
            <Image
              src="/explore/about-us/pravin.png"
              width={300}
              height={300}
              alt="Pravin Nyanes"
            />
          </figure>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-6 py-12">
        <h2 className="text-center text-3xl font-bold">
          Why Choose Talent Trace?
        </h2>
        <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          <div className="rounded bg-white p-6 shadow-lg">
            <h3 className="text-2xl font-bold">Proven Expertise</h3>
            <p className="mt-2">
              Years of experience delivering recruitment solutions across
              industries.
            </p>
          </div>
          <div className="rounded bg-white p-6 shadow-lg">
            <h3 className="text-2xl font-bold">Tailored Approach</h3>
            <p className="mt-2">
              Customized strategies designed to meet unique client needs.
            </p>
          </div>
          <div className="rounded bg-white p-6 shadow-lg">
            <h3 className="text-2xl font-bold">Global Reach</h3>
            <p className="mt-2">
              A network of talent and opportunities that spans the globe.
            </p>
          </div>
          <div className="rounded bg-white p-6 shadow-lg">
            <h3 className="text-2xl font-bold">Commitment to Excellence</h3>
            <p className="mt-2">
              Ensuring satisfaction for both employers and candidates through
              our dedicated service.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue px-6 py-12 text-center text-white">
        <h2 className="text-3xl font-bold">Let’s Build the Future Together</h2>
        <p className="mt-4 text-lg">
          At Talent Trace, we’re passionate about building successful
          partnerships that empower businesses and transform careers.
        </p>
        <div className="mt-6 space-x-4">
          <Button className="hover:bg-green-600 rounded bg-green px-6 py-3 font-semibold text-white transition">
            Find Talent
          </Button>
          <Button className="rounded border-2 border-white px-6 py-3 font-semibold transition hover:bg-white hover:text-blue">
            Advance Your Career
          </Button>
        </div>
      </section>
    </div>
  )
}

export default AboutUsPage
