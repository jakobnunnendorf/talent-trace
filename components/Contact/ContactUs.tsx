import React from 'react'
import ContactHeader from './ContactHeader'
import Calendar from './Calendar'
import ScheduleCall from './ScheduleCall'

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-white px-4 py-24">
      <div className="mx-auto">
        <ContactHeader />
        <div className=" grid grid-cols-1 gap-24 md:grid-cols-2">
          <div className=" flex justify-end p-6">
            <Calendar />
          </div>
          <ScheduleCall />
        </div>
      </div>
    </div>
  )
}
