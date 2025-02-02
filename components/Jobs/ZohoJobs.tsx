'use client'
import { useEffect } from 'react'
import Script from 'next/script'
import './ZohoJobs.css'

// Declare the type for the rec_embed_js object
declare global {
  interface Window {
    rec_embed_js: {
      load: (config: {
        widget_id: string
        page_name: string
        source: string
        site: string
        brand_color: string
        empty_job_msg: string
        extra_fields?: string[]
      }) => void
    }
  }
}

const ZohoJobs = () => {
  useEffect(() => {
    // Create and inject the stylesheet
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href =
      'https://static.zohocdn.com/recruit/embed_careers_site/css/v1.1/embed_jobs.css'
    document.head.appendChild(link)

    return () => {
      // Cleanup on unmount
      document.head.removeChild(link)
    }
  }, [])

  // Function to initialize the widget
  const initializeWidget = () => {
    if (window.rec_embed_js) {
      window.rec_embed_js.load({
        widget_id: 'rec_job_listing_div',
        page_name: 'new',
        source: 'CareerSite',
        site: 'https://talent-trace.zohorecruit.com',
        brand_color: '#70CB34',
        empty_job_msg: 'No current Openings',
      })
    }
  }

  return (
    <section className="rounded-lg bg-white md:mt-24">
      <div className="embed_jobs_head embed_jobs_with_style_3 jobBoard">
        <div className="embed_jobs_head2">
          <h1 className="mt-8 pb-8 text-center text-3xl md:mt-0">Find Jobs</h1>
          <div className="embed_jobs_head3">
            <div id="rec_job_listing_div"></div>
            <Script
              src="https://static.zohocdn.com/recruit/embed_careers_site/javascript/v1.1/embed_jobs.js"
              onLoad={initializeWidget}
              strategy="afterInteractive"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ZohoJobs
