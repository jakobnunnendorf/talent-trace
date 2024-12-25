import React from 'react'
import Link from 'next/link'

export default function ScheduleCall() {
  return (
    <div className="order-1 w-96 rounded-lg bg-white py-6 md:order-2">
      <p className="mb-2 text-sm text-blue">At no extra cost</p>
      <h3 className="mb-3 text-4xl font-semibold text-gray-800">
        Schedule a call with us
      </h3>
      <p className="mb-6 text-gray-600">
        Get a professional consultation and match up with the perfect blend of
        services for your needs.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <Link
          href="/jobs/post"
          className="hover:bg-blue-600 rounded border border-blue px-4 py-2 text-center text-blue transition duration-300"
        >
          Find Talent
        </Link>
        <Link
          href="/jobs/find"
          className="rounded px-4 py-2 text-center text-blue underline underline-offset-4 transition duration-300"
        >
          Search Jobs
        </Link>
      </div>
    </div>
  )
}
