export const howToJoinSteps = [
  'Share Your Hiring Needs: Tell us about the role, skills, and experience you’re looking for. Our team will craft a tailored recruitment strategy.',
  'Candidate Screening and Shortlisting: We leverage our extensive network and advanced tools to screen, evaluate, and present the top candidates that match your requirements.',
  'Final Selection: You choose the best fit from our curated shortlist. We&apos;ll assist in managing interviews, negotiations, and onboarding to ensure a smooth hiring process.',
]

interface Feature {
  title: string
  description: string
  bullets?: string[]
}

export const serviceCards: Feature[] = [
  {
    title: 'Executive Search',
    description:
      'For C-suite, senior leadership, and high-impact roles, our executive search services go beyond traditional recruitment methods to find the right professionals who can drive transformation and innovation in your organization.',
    bullets: [
      'Access an exclusive network of highly skilled professionals.',
      'Tailored search strategies to meet your specific requirements.',
    ],
  },
  {
    title: 'Contingent Search',
    description:
      'Avoid upfront costs and only pay once we successfully place the right candidate. Ideal for junior to mid-level positions, our contingent search service ensures quality and efficiency.',
    bullets: [
      'Flexible, risk-free hiring model.',
      'Dedicated support to streamline the recruitment process.',
    ],
  },
  {
    title: 'Consultancy',
    description:
      'Get expert guidance on optimizing your recruitment strategy and building high-performing teams. Our consultancy services help you develop effective talent acquisition and retention strategies.',
    bullets: [
      'Comprehensive recruitment strategy development.',
      'Expert advice on market trends and best practices.',
    ],
  },
]
