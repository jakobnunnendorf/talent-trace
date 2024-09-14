import React from 'react'
import Link from 'next/link'

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Contact Us</h2>
          <h3 className="text-xl text-gray-600 mb-4">book a consultation</h3>
          <p className="text-gray-500">
            We adopt a holistic approach in recruiting the right candidates for
            you. From the initial step of requisition through to onboarding, we
            will work alongside your team, profiling, consulting and onboarding
            candidates. We have well-trained consultants who can objectively guide
            you through the process. As global consultants, we can find you
            candidates in remote locations as well as popular cities. Speak to us.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="text-center text-gray-600 mb-4">Calendar</div>
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-blue-500 text-white text-center py-2">
                <h4 className="font-semibold">June 2023</h4>
              </div>
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-1 text-xs">Su</th>
                    <th className="py-2 px-1 text-xs">Mo</th>
                    <th className="py-2 px-1 text-xs">Tu</th>
                    <th className="py-2 px-1 text-xs">We</th>
                    <th className="py-2 px-1 text-xs">Th</th>
                    <th className="py-2 px-1 text-xs">Fr</th>
                    <th className="py-2 px-1 text-xs">Sa</th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(5)].map((_, weekIndex) => (
                    <tr key={weekIndex}>
                      {[...Array(7)].map((_, dayIndex) => (
                        <td key={dayIndex} className="py-2 px-1 text-center text-sm">
                          {weekIndex * 7 + dayIndex + 1}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <p className="text-sm text-gray-500 mb-2">At no extra cost</p>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Schedule a call with us</h3>
            <p className="text-gray-600 mb-6">
              Get a professional consultation and match up with the perfect blend
              of services for your needs.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Link href="/contact" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 text-center">Find Talent</Link>
              <Link href="/contact" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300 text-center">Search Jobs</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
