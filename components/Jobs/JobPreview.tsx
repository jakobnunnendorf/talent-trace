import React from 'react'
import Image from 'next/image'

interface JobProps {
  job_title: string
  location: string
  posted_date: string
  salary_range: string
  job_type: string
  company: string
  urgency: string
  company_logo: string
}

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
          <Job key={index} {...job} />
        ))}
      </ul>
      <button className="mx-auto mt-20 block rounded-xl bg-[#1098EF] px-4 py-2 text-white transition-colors duration-300 hover:bg-[#0d7bc7]">
        Load more listings
      </button>
    </div>
  )
}

function Job({
  job_title,
  location,
  posted_date,
  salary_range,
  job_type,
  company,
  urgency,
  company_logo,
}: JobProps) {
  return (
    <li className="flex flex-col justify-between rounded-lg border p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
      <div>
        <div className="mb-4 flex items-center justify-between">
          <Image
            src={company_logo}
            alt={company}
            width={50}
            height={50}
            className="rounded-full"
          />
          {urgency && (
            <span className="rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
              {urgency}
            </span>
          )}
        </div>
        <h3 className="mb-2 text-xl font-semibold">{job_title}</h3>
        <p className="mb-1 text-gray-600">{company}</p>
        <p className="mb-4 text-sm text-gray-500">{location}</p>
        <p className="mb-2 font-medium text-gray-700">{salary_range}</p>
        <p className="text-sm text-gray-500">{job_type}</p>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm text-gray-400">Posted: {posted_date}</span>
        <button className="rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-blue-600">
          Apply Now
        </button>
      </div>
    </li>
  )
}

const jobs: JobProps[] = [
  {
    job_title: 'Chartering Manager',
    location: 'Singapore',
    posted_date: '27/05/2024',
    salary_range: '$80k - $150k',
    job_type: 'Full Time',
    company: 'Oldendorff',
    urgency: 'Urgent',
    company_logo: '/Oldendorff logo.png',
  },
  {
    job_title: 'Operations Executive',
    location: 'Singapore',
    posted_date: '31/01/2024',
    salary_range: '$60k - $120k',
    job_type: 'Full Time',
    company: 'Rio Tinto',
    urgency: '',
    company_logo: '/RioTinto logo.png',
  },
  {
    job_title: 'Vessel Operator',
    location: 'Singapore',
    posted_date: '06/09/2023',
    salary_range: '$55k - $100k',
    job_type: 'Full Time',
    company: 'Oldendorff',
    urgency: '',
    company_logo: '/Oldendorff logo.png',
  },
  {
    job_title: 'Freight Research Analyst',
    location: 'Singapore',
    posted_date: '30/03/2023',
    salary_range: '$50k - $90k',
    job_type: 'Full Time',
    company: 'Rio Tinto',
    urgency: '',
    company_logo: '/RioTinto logo.png',
  },
  {
    job_title: 'LNG Technical Superintendent',
    location: 'Singapore',
    posted_date: '30/10/2023',
    salary_range: '$80k - $160k',
    job_type: 'Full Time',
    company: 'Rio Tinto',
    urgency: 'Urgent',
    company_logo: '/RioTinto logo.png',
  },
  {
    job_title: 'Post Fixture/Laytime Manager',
    location: 'Singapore',
    posted_date: '20/11/2023',
    salary_range: '$70k - $130k',
    job_type: 'Full Time',
    company: 'Rio Tinto',
    urgency: '',
    company_logo: '/RioTinto logo.png',
  },
]
