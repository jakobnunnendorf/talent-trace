import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const imageUrl = '/services.png'

const OurServices = () => {
  return (
    <div className="h-screen p-12">
      <div className="flex h-full w-full flex-col overflow-hidden rounded-3xl bg-white md:flex-row">
        {/* Image Section */}
        <div className="relative h-64 w-full md:h-auto md:w-1/2">
          <Image
            src={imageUrl}
            alt="Our Services"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        {/* Content Section */}
        <div className="flex w-full flex-col justify-center p-8 md:w-1/2">
          <h2 className="mb-4 text-3xl font-bold">Our Services</h2>
          <h2 className="mb-4 text-3xl font-bold">Here to help you grow</h2>
          <p className="mb-6">
            Our services are specific to each niche and tailored towards
            creating a seamless recruitment experience. We are not a traditional
            recruitment firm. We go above and beyond to ensure the right talent
            meets the right opportunity.
          </p>
          <p className="mb-6">
            Advance your career in your field and build on a strong foundation
            in the organization to pave a path towards success. List your
            opportunities with us to find the latest best suited to meet your
            needs. We are the link between your current state and a brighter
            future.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/executivesearch"
              className="rounded bg-blue-500 px-4 py-2 text-white shadow transition-colors hover:bg-blue-600"
            >
              Executive Search
            </Link>
            <button className="rounded bg-blue-500 px-4 py-2 text-white shadow transition-colors hover:bg-blue-600">
              Contingent Search
            </button>
            <button className="rounded bg-blue-500 px-4 py-2 text-white shadow transition-colors hover:bg-blue-600">
              Consultancy
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurServices
