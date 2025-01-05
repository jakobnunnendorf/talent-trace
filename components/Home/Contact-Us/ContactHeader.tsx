import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ContactHeader() {
  return (
    <div className="mb-12 md:mb-24 md:text-center">
      <h2 className="mb-2 font-sans text-4xl font-bold">Contact Us</h2>
      <Link href="contact-us">
        <h3 className="mb-8 flex items-center justify-start gap-2 text-3xl font-bold opacity-50 md:justify-center">
          <p>book a consultation</p>
          <figure>
            <Image
              src="/icons/right-arrow-gray.png"
              alt="arrow"
              width={25}
              height={25}
            />
          </figure>
        </h3>
      </Link>
      <p className="mx-auto font-sans md:w-2/3">
        We adopt a holistic approach in recruiting the right candidates for you.
        From the initial step of requisition through to onboarding, we will work
        alongside your team, profiling, consulting and onboarding candidates. We
        have well-trained consultants who can objectively guide you through the
        process. As global consultants, we can find you candidates in remote
        locations as well as popular cities. Speak to us.
      </p>
    </div>
  )
}
