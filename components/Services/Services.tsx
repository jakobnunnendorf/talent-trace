import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const imageUrl = '/services.png'

const services = [
  { href: '/executivesearch', text: 'Executive Search' },
  { href: '/contingentsearch', text: 'Contingent Search' },
  { href: '/consultancy', text: 'Consultancy' },
]

const OurServices = () => {
  return (
    <div className="h-screen p-12">
      <div className="flex h-full w-full flex-col overflow-hidden rounded-3xl bg-white md:flex-row">
        {/* Image Section */}
        <div className="relative h-64 w-full md:h-auto md:w-1/2">
          <Image
            src={imageUrl}
            alt="Our Services"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="my-auto flex h-4/5 w-full flex-col justify-around p-8 md:w-1/2">
          <div>
            <h2 className="mb-4 text-center font-sans text-6xl font-bold">
              Our Services
            </h2>
            <h2 className="mb-8 text-center text-4xl font-bold text-black/50">
              Here to help you grow
            </h2>
          </div>
          <div className="mx-auto w-4/5">
            <p className="mb-4 text-lg">
              Our services are specific to each niche and tailored towards
              creating a seamless recruitment experience. We are not a
              traditional recruitment firm. We go above and beyond to ensure the
              right talent meets the right opportunity.
            </p>
            <p className="mb-8 text-lg">
              Advance your career in your field and build on a strong foundation
              in the organization to pave a path towards success. List your
              opportunities with us to find the latest best suited to meet your
              needs. We are the link between your current state and a brighter
              future.
            </p>
          </div>
          <div className="flex justify-center gap-4">
            {services.map((service, index) => (
              <ServiceLink key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurServices

interface ServiceLinkProps {
  href: string
  text: string
}

const ServiceLink: React.FC<ServiceLinkProps> = ({ href, text }) => {
  return (
    <Link
      href={href}
      className="border border-[#41ADF2] px-4 py-2 text-[#41ADF2] shadow transition-colors hover:bg-[#41ADF2] hover:text-white"
    >
      {text}
    </Link>
  )
}
