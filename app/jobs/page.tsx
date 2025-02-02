// pages/JobList.tsx
import { ConsultationForm } from '@/components/Jobs/ConsultationForm'
import ZohoJobs from '@/components/Jobs/ZohoJobs'
import SubHero from '@/components/shared/Header/SubHero'
import React from 'react'

const Jobs = () => {
  return (
    <div className="bg-gray-100 pb-20">
      <SubHero
        headline="Jobs"
        description="Explore our job listings and find your dream career."
        primaryButton="Find Jobs"
        primaryButtonLink="/jobs/find"
        secondaryButton="Post a free Job"
        secondaryButtonLink="/jobs/post"
      />
      <section className="py-0 lg:mx-auto lg:max-w-6xl">
        <ZohoJobs />
      </section>

      <section className="md:py-12" id="post-job-form">
        <ConsultationForm />
      </section>
    </div>
  )
}

export default Jobs
