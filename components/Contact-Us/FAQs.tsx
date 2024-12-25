import React from 'react'
import { fetchFAQs } from '@/lib/notion'

export default async function FAQs() {
  const faqs = await fetchFAQs()

  return (
    <div className="mt-12">
      <h2 className="mb-6 text-2xl font-bold">
        Quick Answers to Common Questions
      </h2>
      <div className="space-y-6">
        {faqs.map((faq) => (
          <div key={faq.question}>
            <h3 className="font-semibold">{faq.question}</h3>
            <p className="mt-1 text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
