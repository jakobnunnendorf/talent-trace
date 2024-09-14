// components/Footer.tsx
import React from 'react'
// import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 p-6">
      <div className="mx-auto grid max-w-7xl grid-cols-4 gap-4">
        {/* Logo and Social Media */}
        <div className="flex flex-col items-start">
          <div className="mb-2 text-lg font-bold">Talent Trace</div>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              className="text-gray-600 hover:text-gray-800"
            >
              {/* <FaFacebookF /> */}
              FB
            </a>
            <a
              href="https://twitter.com"
              className="text-gray-600 hover:text-gray-800"
            >
              {/* <FaTwitter /> */}X
            </a>
            <a
              href="https://instagram.com"
              className="text-gray-600 hover:text-gray-800"
            >
              {/* <FaInstagram /> */}
              IG
            </a>
          </div>
        </div>

        {/* Column for Candidates */}
        <div className="flex flex-col">
          <div className="mb-1 font-semibold">For Candidates</div>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
            Job Opportunities
          </a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
            Browse Categories
          </a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
            Upload CV
          </a>
        </div>

        {/* Column for Employers */}
        <div className="flex flex-col">
          <div className="mb-1 font-semibold">For Employers</div>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
            Browse Candidates
          </a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
            Employer Dashboard
          </a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
            Add Job
          </a>
        </div>

        {/* Column for Others and Legal */}
        <div className="flex flex-col">
          <div className="mb-1 font-semibold">Other</div>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
            About Us
          </a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
            Executive Search
          </a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
            Contingency Search
          </a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
            News
          </a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
            Contact Us
          </a>
          <div className="mb-1 mt-2 font-semibold">Legal</div>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
            Privacy Policy
          </a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
            Terms and Conditions
          </a>
        </div>
      </div>
      <div className="mt-6 text-center text-xs text-gray-600">
        Copyright © 2024 Talent Trace Pte Ltd. All Rights Reserved
      </div>
    </footer>
  )
}

export default Footer
