import React from 'react'
import ContactHeader from './ContactHeader'
import Calendar from './Calendar'
import ScheduleCall from './ScheduleCall'

export default function ContactUs() {
  return (
    <div className="bg-white px-6 md:py-24">
      <div className="mx-auto">
        <ContactHeader />
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-24">
          <div className="order-2 flex justify-center py-6 md:order-1 md:justify-end">
            <Calendar />
          </div>
          <ScheduleCall />
        </div>
      </div>
    </div>
  )
}
