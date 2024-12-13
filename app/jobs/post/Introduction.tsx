import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'

export default function Introduction() {
  return (
    <section className="w-full bg-gray-100 py-32">
      <h1 className="pb-16 text-center text-5xl">Why Talent Trace?</h1>
      <div className="mx-auto grid h-[40vh] max-w-5xl grid-cols-2">
        <Card className="rounded-r-none border-r-0 py-8">
          <CardHeader>
            <CardTitle>Finding talent doesn't have to be hard</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="pb-4">
              Finding the right talent doesn&apos;t have to be a challenge. At
              Talent Trace, we specialize in matching your organization with
              candidates who not only meet your technical requirements but also
              align with your goals, values, and culture.
            </p>
            <p>
              Whether you&apos;re hiring for an executive role or filling a
              mid-level position, we deliver tailored solutions to save you
              time, effort, and resources.
            </p>
          </CardContent>
          <CardFooter>
            <p>Tracing Talent. Paving Careers.</p>
          </CardFooter>
        </Card>
        <figure className="relative h-full w-full">
          <Image
            src="/jobs/finding talent.jpg"
            alt="Finding Talent"
            fill
            className="rounded-r-lg"
          />
        </figure>
      </div>
    </section>
  )
}
