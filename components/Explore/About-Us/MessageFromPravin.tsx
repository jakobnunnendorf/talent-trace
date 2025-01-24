import React from 'react'
import Image from 'next/image'

export default function MessageFromPravin() {
  return (
    <section className="bg-gray-100 px-6 py-12">
      <div className="mx-auto grid w-2/3 grid-cols-2">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-center text-3xl font-bold">
            Message from Our Managing Director
          </h2>
          <div className="mx-auto mt-6 max-w-3xl text-center">
            <p className="text-lg italic">
              &quot;At Talent Trace, our number one priority is to deliver
              exceptional service to both our clients and candidates. Whether
              you&apos;re hiring talent or seeking a new opportunity, our Talent
              Tracers are here to ensure a seamless experience at every
              step.&quot;
            </p>
            <p className="mt-4 font-bold">– Pravin Nyanes</p>
            <p className="italic">Managing Director, Talent Trace</p>
          </div>
        </div>
        <figure className="flex items-center justify-center">
          <Image
            src="/explore/about-us/Pravin.png"
            width={300}
            height={300}
            alt="Pravin Nyanes"
          />
        </figure>
      </div>
    </section>
  )
}
