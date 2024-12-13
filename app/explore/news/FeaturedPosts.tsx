import React from 'react'
import Image from 'next/image'

export default function FeaturedPosts() {
  return (
    <section className="px-6 py-12">
      <h2 className="text-center text-3xl font-bold">Featured Insights</h2>
      <div className="mx-auto mt-8 flex max-w-4xl flex-col items-center rounded bg-white shadow-lg md:flex-row">
        <Image
          src={coverImageUrl}
          alt={coverImageUrl}
          width={500}
          height={500}
          className="w-full rounded-t md:w-1/2 md:rounded-l md:rounded-t-none"
        />
        <div className="p-6">
          <h3 className="text-2xl font-bold">
            {getNotionProperty(blogPosts[0], 'Title')}
          </h3>
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
      <div>{getNotionProperty(blogPosts[0], 'Title')}</div>
      <div>{Object.keys(blogPosts[0]['id']).join(' ')}</div>
      <div>{Object.keys(blogPosts[0]).join('  ')}</div>
      <div>{blogPosts.map((post) => JSON.stringify(post))}</div>
    </section>
  )
}
