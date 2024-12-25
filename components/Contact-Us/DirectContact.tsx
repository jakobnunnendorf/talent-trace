import React from 'react'
import FAQs from './FAQs'
import ContactInformation from './ContactInformation'

export default function DirectContact() {
  return (
    <div className="lg:col-span-2 lg:pt-8">
      <div className="space-y-8 px-8">
        <h2 className="text-2xl font-bold">Prefer to Reach Us Directly?</h2>
        <ContactInformation />
        <FAQs />
      </div>
    </div>
  )
}
