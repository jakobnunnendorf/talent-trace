import MessageFromPravin from '@/components/Explore/About-Us/MessageFromPravin'
import SubHero from '@/components/shared/Header/SubHero'
import CTASection from '@/components/shared/sections/CTASection'
import FeatureGrid from '@/components/shared/sections/FeatureGrid'
import TextSection from '@/components/shared/sections/TextSection'
import React from 'react'
import { textSections, features } from './content'

const AboutUsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      <SubHero
        headline="About Us"
        description=" Your Global Partner in Talent and HR Solutions"
      />

      {textSections.map((textSection, index) => {
        return (
          <TextSection
            key={index}
            heading={textSection.heading}
            paragraphs={textSection.paragraphs}
            bulletPoints={textSection.bulletPoints}
            bg={index % 2 === 1}
          />
        )
      })}

      <MessageFromPravin />
      <FeatureGrid title="Why Choose Talent Trace?" features={features} />
      <TextSection
        paragraphs={[
          "Here, it's more than just a job—it's about building a career that excites you while making a real difference for businesses and individuals alike.",
        ]}
      />
      <FeatureGrid
        title="What we look for"
        subtitle="At Talent Trace, we're searching for people who are passionate about making a real difference in the world of recruitment. Here's what we value:"
        features={[
          {
            title: 'Ambition and Drive',
            description:
              "You're someone who's motivated to achieve, go beyond expectations, and grow along the way.",
          },
          {
            title: 'Empathy and Connection',
            description:
              'You genuinely care about people, building strong relationships with clients and candidates comes naturally to you.',
          },
          {
            title: 'A Problem-Solver at Heart',
            description:
              "Challenges don't scare you—in fact, you see them as chances to get creative and find solutions.",
          },
          {
            title: 'Integrity Matters to You',
            description:
              "You believe in doing what's right, being honest, and keeping your word.",
          },
          {
            title: 'A Team Player with Initiative',
            description:
              "You work well with others, but you're also ready to take the lead and make things happen.",
          },
        ]}
        summary="If you're someone who's excited to work in a dynamic and supportive environment where your efforts truly make an impact, we'd love to hear from you."
      />
      <section className="bg-gray-100 px-6 py-12">
        <h2 className="text-center text-3xl font-bold">Success Stories</h2>
        <blockquote className="mx-auto mt-6 max-w-3xl text-center text-lg italic">
          &quot;I’d like to take a moment to acknowledge someone who has truly
          redefined my experience in job hunting. Pravin Nyanes came highly
          recommended by a friend of mine in commercial shipping, and after
          engaging with him, I can confidently say he’s one of the best
          recruiters I’ve ever come across. &quot;
        </blockquote>
        <p className="mt-4 text-center font-bold">
          – Yew Huat Chong, Port Captain, Oldendorff
        </p>
        <blockquote className="mx-auto mt-6 max-w-3xl text-center text-lg italic">
          &quot;As a hiring manager I have had the pleasure of working with
          Pravin on several occasions. When doing multiple recruitments for both
          sales and technical roles, Pravin helped me find great candidates that
          ended up being amazing hires for the team.&quot;
        </blockquote>
        <p className="mt-4 text-center font-bold">
          – Marck Madsen, CEO & CO-FOUNDER, Antomation Pte Ltd
        </p>
      </section>
      <CTASection
        title="Let's Build the Future Together"
        description="At Talent Trace, we're passionate about building successful partnerships that empower businesses and transform careers."
        primaryButton={{ text: 'Find Talent', href: '/jobs' }}
        secondaryButton={{ text: 'Advance Your Career', href: '/jobs' }}
      />
    </div>
  )
}

export default AboutUsPage
