import { ContactForm } from './ContactForm'
import { MapPin, Clock, Phone, Mail } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Let's Connect!
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Have a question, feedback, or inquiry? We'd love to hear from you. Our
          team is here to help you with all your recruitment and HR needs.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
        {/* Contact Information */}
        <div className="lg:col-span-2 lg:pt-8">
          <div className="space-y-8">
            <h2 className="text-2xl font-bold">Prefer to Reach Us Directly?</h2>

            <div className="space-y-6">
              <div className="flex gap-x-4">
                <Mail className="h-6 w-6 text-blue" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="mt-1">support@talenttrace.com</p>
                </div>
              </div>

              <div className="flex gap-x-4">
                <Phone className="h-6 w-6 text-blue" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="mt-1">+65 XXXX XXXX</p>
                </div>
              </div>

              <div className="flex gap-x-4">
                <Clock className="h-6 w-6 text-blue" />
                <div>
                  <h3 className="font-semibold">Office Hours</h3>
                  <p className="mt-1">Monday to Friday, 9 AM - 6 PM (SGT)</p>
                </div>
              </div>

              <div className="flex gap-x-4">
                <MapPin className="h-6 w-6 text-blue" />
                <div>
                  <h3 className="font-semibold">Singapore (Headquarters)</h3>
                  <p className="mt-1">[Insert Address]</p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-12">
              <h2 className="mb-6 text-2xl font-bold">
                Quick Answers to Common Questions
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold">
                    How long does it take to hear back?
                  </h3>
                  <p className="mt-1 text-gray-600">
                    We aim to respond to all inquiries within 24-48 hours.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">
                    Can I submit my resume through this form?
                  </h3>
                  <p className="mt-1 text-gray-600">
                    Yes! You can attach your resume directly when sending us a
                    message.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">
                    Where can I find updates on career opportunities?
                  </h3>
                  <p className="mt-1 text-gray-600">
                    Follow our LinkedIn page for the latest job openings and
                    updates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="rounded-xl bg-white p-8 shadow-lg lg:col-span-3">
          <h2 className="mb-8 text-2xl font-bold">Send Us a Message</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}