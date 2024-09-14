import React from 'react'
import Link from 'next/link'

export default function ScheduleCall() {
  return (
    <div className="w-96 rounded-lg bg-white p-6">
      <p className="mb-2 text-sm text-[#1098EF]">At no extra cost</p>
      <h3 className="mb-3 text-4xl font-semibold text-gray-800">
        Schedule a call with us
      </h3>
      <p className="mb-6 text-gray-600">
        Get a professional consultation and match up with the perfect blend of
        services for your needs.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <Link
          href="/contact"
          className="rounded border border-[#1098EF] px-4 py-2 text-center text-[#1098EF] transition duration-300 hover:bg-blue-600"
        >
          Find Talent
        </Link>
        <Link
          href="/contact"
          className="rounded px-4 py-2 text-center text-[#1098EF] underline underline-offset-4 transition duration-300"
        >
          Search Jobs
        </Link>
      </div>
    </div>
  )
}
