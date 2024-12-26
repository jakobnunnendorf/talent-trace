import React from 'react'
import SubHero from '@/components/shared/Header/SubHero'
import TextSection from '@/components/shared/sections/TextSection'

const TermsAndConditionsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      <SubHero
        headline="Terms and Conditions"
        description="Last updated: April 2024"
      />

      <TextSection
        heading="Agreement to Terms"
        paragraphs={[
          "By accessing and using Talent Trace's website and services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services.",
        ]}
      />

      <TextSection
        heading="Use of Our Services"
        bulletPoints={[
          'You must provide accurate and complete information when using our services',
          'You are responsible for maintaining the confidentiality of your account',
          'You agree not to use our services for any unlawful purpose',
          'We reserve the right to terminate or suspend access to our services at our discretion',
        ]}
        bg
      />

      <TextSection
        heading="Recruitment Services"
        bulletPoints={[
          'Talent Trace acts as an intermediary between employers and job seekers',
          'We do not guarantee employment or hiring outcomes',
          'All information provided must be accurate and truthful',
          'Fees and payment terms are subject to separate agreements',
        ]}
      />

      <TextSection
        heading="Intellectual Property"
        paragraphs={[
          'All content on our website and services, including but not limited to text, graphics, logos, and software, is the property of Talent Trace and is protected by intellectual property laws.',
        ]}
        bg
      />

      <TextSection
        heading="Limitation of Liability"
        paragraphs={[
          'Talent Trace shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.',
        ]}
      />

      <TextSection
        heading="Changes to Terms"
        paragraphs={[
          'We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through our website.',
        ]}
        bg
      />

      <TextSection
        heading="Contact Information"
        paragraphs={[
          'If you have any questions about these Terms and Conditions, please contact us at:',
          'Email: legal@talent-trace.com',
          'Address: [Insert Address]',
        ]}
      />
    </div>
  )
}

export default TermsAndConditionsPage
