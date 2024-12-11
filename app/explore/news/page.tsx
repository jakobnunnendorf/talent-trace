import SubHero from '@/components/Header/SubHero'
import React from 'react'

const LatestNewsPage: React.FC = () => {
  // Mock dynamic data for demonstration purposes
  const featuredPost = {
    image: '/images/featured-post.jpg', // Replace with dynamic image source
    title: 'Revolutionizing Recruitment: Top Trends to Watch in 2024',
    summary:
      'Discover how emerging technologies and innovative strategies are shaping the future of recruitment.',
    date: 'November 6, 2024',
    link: '/blog/revolutionizing-recruitment',
  }

  const recentPosts = [
    {
      id: 1,
      image: '/images/post1.jpg',
      title: '5 Key Strategies for Effective Talent Acquisition in 2024',
      excerpt:
        'Explore the most effective approaches to attract and retain top talent in a competitive market.',
      date: 'November 4, 2024',
      link: '/blog/talent-acquisition-strategies',
    },
    {
      id: 2,
      image: '/images/post2.jpg',
      title: 'How to Retain Top Talent in a Competitive Job Market',
      excerpt:
        'Learn actionable strategies to improve retention rates in a dynamic employment landscape.',
      date: 'October 28, 2024',
      link: '/blog/retain-top-talent',
    },
    {
      id: 3,
      image: '/images/post3.jpg',
      title: 'Breaking Down the Benefits of Contingent Search Services',
      excerpt:
        'Understand how contingent search can save costs and enhance recruitment efficiency.',
      date: 'October 20, 2024',
      link: '/blog/contingent-search-benefits',
    },
    {
      id: 4,
      image: '/images/post4.jpg',
      title: 'Behind the Scenes: The Role of Technology in Recruitment',
      excerpt:
        'Discover the tools and platforms transforming talent acquisition processes.',
      date: 'October 12, 2024',
      link: '/blog/technology-in-recruitment',
    },
  ]

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <SubHero
        headline="Latest News & Insights"
        description="Explore insights, industry trends, and company updates from the world
          of recruitment, HR, and beyond."
        primaryButton="Read Our Blog"
        secondaryButton="Subscribe for Updates"
      />

      {/* Featured Post Section */}
      <section className="px-6 py-12">
        <h2 className="text-center text-3xl font-bold">Featured Insights</h2>
        <div className="mx-auto mt-8 flex max-w-4xl flex-col items-center rounded bg-white shadow-lg md:flex-row">
          <img
            src={featuredPost.image}
            alt={featuredPost.title}
            className="w-full rounded-t md:w-1/2 md:rounded-l md:rounded-t-none"
          />
          <div className="p-6">
            <h3 className="text-2xl font-bold">{featuredPost.title}</h3>
            <p className="mt-4">{featuredPost.summary}</p>
            <p className="mt-2 text-sm text-gray-500">
              Published on {featuredPost.date}
            </p>
            <a
              href={featuredPost.link}
              className="hover:bg-green-600 mt-4 inline-block rounded bg-green px-6 py-2 font-semibold text-white transition"
            >
              Read More
            </a>
          </div>
        </div>
      </section>

      {/* Recent Posts Section */}
      <section className="bg-gray-100 px-6 py-12">
        <h2 className="text-center text-3xl font-bold">Recent Updates</h2>
        <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {recentPosts.map((post) => (
            <div
              key={post.id}
              className="overflow-hidden rounded bg-white shadow-lg"
            >
              <img
                src={post.image}
                alt={post.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">
                  <a href={post.link}>{post.title}</a>
                </h3>
                <p className="mt-2 text-sm text-gray-600">{post.excerpt}</p>
                <p className="mt-2 text-xs text-gray-500">
                  Published on {post.date}
                </p>
                <a
                  href={post.link}
                  className="mt-4 inline-block font-semibold text-blue underline"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Subscription Section */}
      <section className="px-6 py-12">
        <h2 className="text-center text-3xl font-bold">Don’t Miss a Post!</h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-lg">
          Subscribe to our newsletter for expert insights and the latest updates
          from Talent Trace.
        </p>
        <form className="mx-auto mt-8 flex max-w-md flex-col items-center space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded border border-gray-300 px-4 py-2 focus:border-blue focus:ring-blue"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full rounded border border-gray-300 px-4 py-2 focus:border-blue focus:ring-blue"
          />
          <button
            type="submit"
            className="hover:bg-green-600 rounded bg-green px-6 py-3 font-semibold text-white transition"
          >
            Subscribe Now
          </button>
        </form>
      </section>
    </div>
  )
}

export default LatestNewsPage
