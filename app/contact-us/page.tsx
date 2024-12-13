import { ContactForm } from './ContactForm'
import { MapPin, Clock, Phone, Mail } from 'lucide-react'
import SubHero from '@/components/Header/SubHero'

export default function ContactPage() {
  return (
    <div className="">
      {/* Hero Section */}
      <SubHero
        headline="Let's Connect!"
        description="Have a question, feedback, or inquiry? We'd love to hear from you. Our
          team is here to help you with all your recruitment and HR needs."
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-16 gap-y-8 py-16 lg:grid-cols-5">
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
