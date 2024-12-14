import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const imageUrl = '/services.png'

const services = [
  { href: '/services/executive-search', text: 'Executive Search' },
  { href: '/services/contingent-search', text: 'Contingent Search' },
  { href: '/services/consultancy', text: 'Consultancy' },
]

const OurServices = () => {
  return (
    <div className="px-6 md:h-screen md:p-12">
      <div className="flex h-full w-full flex-col overflow-hidden rounded-3xl rounded-b-none bg-white md:flex-row md:rounded-b-3xl">
        {/* Image Section */}
        <div className="relative h-48 w-full md:h-auto md:w-1/2">
          <Image
            src={imageUrl}
            alt="Our Services"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="my-auto flex w-full flex-col justify-around md:h-4/5 md:w-1/2 md:p-8">
          <div className="">
            <h2 className="my-4 font-sans text-4xl md:text-center md:text-6xl md:font-bold">
              Our Services
            </h2>
            <h2 className="mb-4 text-2xl text-black/50 md:text-center md:font-bold">
              Here to help you grow
            </h2>
          </div>
          <div className="md:mx-auto md:w-4/5">
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
          <div className="flex flex-col justify-center gap-4 md:flex-row">
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
      className="border border-[#41ADF2] px-4 py-2 text-center text-[#41ADF2] shadow transition-colors hover:bg-[#41ADF2] hover:text-white md:text-start"
    >
      {text}
    </Link>
  )
}
