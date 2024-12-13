import React from 'react'
import JobCard from './JobCard'
import { jobs } from './jobList'
import { Button } from '../ui/button'

export default function JobPreview() {
  return (
    <div className="w-full py-16">
      <h2 className="text-center font-sans text-3xl">Explore Jobs</h2>
      <p className="mx-auto mb-12 mt-4 w-2/3 text-center">
        We are committed to helping you find the perfect opportunity that
        matches your skills and aspirations. Get in touch with us today by
        applying below.
      </p>
      <ul className="grid grid-cols-1 gap-8 px-12 md:grid-cols-2">
        {jobs.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </ul>
      <Button className="bg-blue mx-auto mt-20 block rounded-xl px-8 py-4 text-white transition-colors duration-300 hover:bg-[#0d7bc7]">
        Load more listings
      </Button>
    </div>
  )
}
