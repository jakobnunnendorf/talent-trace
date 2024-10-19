// pages/JobList.tsx
import React from 'react'

const JobList = () => {
  // Example data structure for jobs
  const jobs = [
    {
      id: 1,
      title: 'Software Engineer',
      location: 'London, UK',
      posted: '11 hours ago',
      salary: '35k-45k',
    },
    {
      id: 2,
      title: 'Product Manager',
      location: 'Berlin, DE',
      posted: '5 hours ago',
      salary: '50k-70k',
    },
    // Add more jobs as needed
  ]

  return (
    <div className="bg-gray-50 p-8">
      <div className="flex flex-col items-center justify-center">
        <h1>Find Jobs</h1>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col justify-between md:flex-row">
          {/* Search and Filter Section */}
          <aside className="w-full bg-white p-4 shadow-md md:w-1/4">
            <input
              type="text"
              placeholder="Job title, keywords, or company"
              className="mb-4 w-full border p-2"
            />
            <input
              type="text"
              placeholder="City or postcode"
              className="mb-4 w-full border p-2"
            />
            {/* Additional filters can be added here */}
          </aside>

          {/* Job Listing Section */}
          <div className="w-full bg-white p-4 shadow-md md:w-3/4">
            {jobs.map((job) => (
              <div key={job.id} className="border-b border-gray-200 p-4">
                <h3 className="text-lg font-bold">{job.title}</h3>
                <p className="text-gray-600">{job.location}</p>
                <p className="text-sm text-gray-500">{job.posted}</p>
                <p className="text-sm text-blue-500">{job.salary}</p>
              </div>
            ))}
            {/* Pagination could be added here */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobList
