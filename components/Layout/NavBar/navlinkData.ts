export interface NavLink {
  title: string
  relativePath: string
  subLinks?: Record<string, SubLink> | null
  isExternal?: boolean
}

export interface SubLink {
  relativePath: string
  description: string
  isExternal?: boolean
}

export const links: Record<string, NavLink> = {
  Home: { title: 'Home', relativePath: '/', subLinks: null },
  Jobs: { title: 'Jobs', relativePath: '/jobs', subLinks: null },
  Services: {
    title: 'Services',
    relativePath: '/services',
    subLinks: {
      'Executive Search': {
        relativePath: '/services/executive-search',
        description:
          'Premium search service for senior and executive-level positions.',
      },
      'Contingent Search': {
        relativePath: '/services/contingent-search',
        description:
          'Flexible recruitment solutions for professional and specialist roles.',
      },
      Consultancy: {
        relativePath: '/services/consultancy',
        description:
          'Strategic HR and recruitment consulting services for your business.',
      },
    },
  },
  Explore: {
    title: 'Explore',
    relativePath: '/explore',
    subLinks: {
      'About Us': {
        relativePath: '/explore/about-us',
        description: 'Learn more about our company, mission, and values.',
      },
      'Join the Team': {
        relativePath: '/explore/join-us',
        description:
          'Explore career opportunities and become part of our team.',
      },
      'Latest News': {
        relativePath: '/explore/news',
        description:
          'Stay updated with our latest company news, insights, and industry trends.',
      },
    },
  },
  Contact: {
    title: 'Contact Us',
    relativePath: '/contact-us',
    subLinks: {
      'Schedule a Call': {
        relativePath: '/jobs/post#post-job-form',
        description:
          'Book a consultation call with one of our recruitment specialists.',
      },
      'Send us a Message': {
        relativePath: '/contact-us',
        description: 'Get in touch with our team through our contact form.',
      },
      'Upload CV': {
        relativePath:
          'https://talent-trace.zohorecruit.com/forms/677184c20dcfb9044e43b5672ceb5e3530c617412e8922022dcc64355524d8f5',
        description:
          'Submit your CV to our talent pool for future opportunities.',
        isExternal: true,
      },
    },
  },
}
