import SubHero from '@/components/Header/SubHero'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const JoinUsPage: React.FC = () => {
  // TODO insert real links
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <SubHero
        headline="Join Us"
        description="Shape Your Career with Talent Trace"
      />

      {/* Why Join Talent Trace */}
      <section className="px-6 py-12">
        <h2 className="text-center text-3xl font-bold">
          Why Join Talent Trace?
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-lg">
          At Talent Trace, we believe in unlocking potential—yours and the
          clients we serve. If you have the drive to succeed, a sharp eye for
          talent, and a passion for innovative recruitment strategies, then
          you’ll feel right at home with our team of{' '}
          <strong>Talent Tracers</strong>.
        </p>
        <p className="mx-auto mt-4 max-w-3xl text-center text-lg">
          By joining Talent Trace, you’ll have the opportunity to collaborate
          with an exceptional team of recruitment professionals, work on
          exciting projects, and grow your career in a thriving and dynamic
          environment.
        </p>
      </section>

      {/* What We Look For */}
      <section className="bg-gray-100 px-6 py-12">
        <h2 className="text-center text-3xl font-bold">What We Look For</h2>
        <ul className="mx-auto mt-6 max-w-3xl list-inside list-disc text-lg">
          <li>
            <strong>Ambition and Drive:</strong> A determination to succeed and
            go the extra mile for our clients.
          </li>
          <li>
            <strong>Talent Spotters:</strong> The ability to identify the best
            candidates, even in niche markets.
          </li>
          <li>
            <strong>Innovative Thinkers:</strong> A willingness to adopt
            cutting-edge recruitment methods and tools.
          </li>
          <li>
            <strong>Team Players:</strong> A collaborative spirit and dedication
            to excellence.
          </li>
        </ul>
        <p className="mx-auto mt-4 max-w-3xl text-center text-lg">
          If this sounds like you, we’d love to hear from you!
        </p>
      </section>

      {/* What We Offer */}
      <section className="px-6 py-12">
        <h2 className="text-center text-3xl font-bold">What We Offer</h2>
        <ul className="mx-auto mt-6 max-w-3xl list-inside list-disc text-lg">
          <li>
            <strong>Growth Opportunities:</strong> Build your career with us and
            expand your expertise in specialized recruitment.
          </li>
          <li>
            <strong>Collaborative Culture:</strong> Join a team of driven
            professionals who value innovation and teamwork.
          </li>
          <li>
            <strong>Diverse Industries:</strong> Work with clients across
            sectors such as IT, robotics, commodity trading, and more.
          </li>
          <li>
            <strong>Cutting-Edge Tools:</strong> Gain access to the latest tools
            and strategies to excel in talent acquisition.
          </li>
        </ul>
      </section>

      {/* How to Join Us */}
      <section className="bg-gray-100 px-6 py-12">
        <h2 className="text-center text-3xl font-bold">How to Join Us</h2>
        <ol className="mx-auto mt-6 max-w-3xl space-y-4 text-lg">
          <li>
            <strong>1. Explore Opportunities:</strong> Follow our{' '}
            <a href="#" className="text-blue underline">
              LinkedIn page
            </a>{' '}
            to stay updated on current openings and company updates.
          </li>
          <li>
            <strong>2. Connect with Us:</strong> Reach out directly to learn
            more about how you can join our team.
          </li>
          <li>
            <strong>3. Apply Today:</strong> Contact us to discuss how your
            skills can contribute to Talent Trace’s mission.
          </li>
        </ol>
      </section>

      {/* CTA Section  */}
      <section className="bg-blue px-6 py-12 text-center text-white">
        <h2 className="text-3xl font-bold">
          Start Your Journey with Talent Trace
        </h2>
        <p className="mt-4 text-lg">
          Become part of a team that’s shaping the future of recruitment. Let’s
          grow together.
        </p>
        <div className="mt-6 space-x-4">
          <Button className="hover:bg-green-600 rounded bg-green px-6 py-3 font-semibold text-white transition">
            <Link
              href="https://talent-trace.zohorecruit.com/forms/677184c20dcfb9044e43b5672ceb5e3530c617412e8922022dcc64355524d8f5"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply now
            </Link>
          </Button>
          <Button className="rounded border-2 border-white px-6 py-3 font-semibold transition hover:bg-white hover:text-blue">
            <Link
              href="https://www.linkedin.com/company/talent-trace/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow Us on LinkedIn
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default JoinUsPage
