import React from 'react'
import SubHero from '@/components/shared/Header/SubHero'
import TextSection from '@/components/shared/sections/TextSection'

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      <SubHero
        headline="Privacy Policy"
        description="Last updated: April 2024"
      />

      <TextSection
        heading="Introduction"
        paragraphs={[
          'At Talent Trace, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.',
        ]}
      />

      <TextSection
        heading="Information We Collect"
        paragraphs={[
          'We collect information that you voluntarily provide to us when you:',
        ]}
        bulletPoints={[
          'Register on our website',
          'Submit your CV or job application',
          'Fill out a contact form',
          'Subscribe to our newsletter',
          'Apply for job opportunities',
        ]}
        bg
      />

      <TextSection
        heading="How We Use Your Information"
        bulletPoints={[
          'Process your job applications',
          'Match you with potential employers',
          'Send you relevant job opportunities',
          'Communicate with you about our services',
          'Improve our website and services',
          'Comply with legal obligations',
        ]}
      />

      <TextSection
        heading="Information Sharing"
        paragraphs={['We may share your information with:']}
        bulletPoints={[
          'Potential employers (with your consent)',
          'Service providers who assist in our operations',
          'Legal authorities when required by law',
        ]}
        bg
      />

      <TextSection
        heading="Data Security"
        paragraphs={[
          'We implement appropriate technical and organizational measures to maintain the security of your personal information.',
        ]}
      />

      <TextSection
        heading="Your Rights"
        bulletPoints={[
          'Access your personal data',
          'Correct inaccurate data',
          'Request deletion of your data',
          'Withdraw consent at any time',
          'Request data portability',
        ]}
        bg
      />

      <TextSection
        heading="Contact Us"
        paragraphs={[
          'If you have any questions about this Privacy Policy, please contact us at:',
          'Email: privacy@talent-trace.com',
          'Address: [Insert Address]',
        ]}
      />
    </div>
  )
}

export default PrivacyPolicyPage
