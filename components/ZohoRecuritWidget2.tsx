'use client'
import Link from 'next/link'
import { useEffect } from 'react'

const ZohoRecruitWidgetStyle1 = () => {
  useEffect(() => {
    // Load the Zoho script dynamically
    const script = document.createElement('script')
    script.src =
      'https://static.zohocdn.com/recruit/embed_careers_site/javascript/v1.1/embed_jobs.js'
    script.async = true
    script.onload = () => {
      // Initialize widget after script loads
      if (window.rec_embed_js) {
        window.rec_embed_js.load({
          widget_id: 'rec_job_listing_div',
          page_name: 'Careers',
          source: 'CareerSite',
          site: 'https://talent-trace.zohorecruit.com',
          brand_color: '#6875E2',
          empty_job_msg: 'No current Openings',
          extra_fields: ['Salary', 'Industry'],
        })
      }
    }
    document.body.appendChild(script)

    return () => {
      // Cleanup
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="embed_jobs_head embed_jobs_with_style_1 preview">
      <div className="embed_jobs_head2">
        <div className="embed_jobs_head3">
          <div id="rec_job_listing_div"></div>
        </div>
        <div className="mt-8 flex items-center justify-center">
          <Link
            href=""
            className="rounded-lg bg-[#6875E2] px-4 py-2 text-lg text-white"
          >
            <p className="">View more</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ZohoRecruitWidgetStyle1
