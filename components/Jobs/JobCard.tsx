import React from 'react'
import CompanyLogo from './CompanyLogo'
import ApplyButton from './ApplyButton'
import JobTitle from './JobTitle'
import JobDetails from './JobDetails'
import JobTags from './JobTags'
import { JobProps } from './types'

export default function JobCard({
  job_title,
  location,
  posted_date,
  salary_range,
  job_type,
  company,
  tags,
  company_logo,
}: JobProps) {
  return (
    <li>
      <article className="flex h-full flex-col rounded-lg border p-6 shadow-md transition-shadow duration-300 hover:bg-blue-50/50 hover:shadow-lg">
        <div className="flex items-center justify-between py-4">
          <CompanyLogo src={company_logo} alt={company} />
          <ApplyButton />
        </div>
        <div className="w-full">
          <JobTitle title={job_title} />
          <JobDetails
            company={company}
            location={location}
            posted_date={posted_date}
            salary_range={salary_range}
          />
          <JobTags job_type={job_type} tags={tags} />
        </div>
      </article>
    </li>
  )
}
