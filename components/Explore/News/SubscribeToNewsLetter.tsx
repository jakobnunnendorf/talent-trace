import { Button } from '@/components/ui/button'
import React from 'react'
import MailchimpForm from './MailChimpForm'

export default function SubscribeToNewsLetter() {
  return (
    <section id="subscribe-newsletter" className="px-6 py-12">
      <h2 className="text-center text-3xl font-bold">Don’t Miss a Post!</h2>
      <p className="mx-auto mt-4 max-w-3xl text-center text-lg">
        Subscribe to our newsletter for expert insights and the latest updates
        from Talent Trace.
      </p>
      <MailchimpForm />
    </section>
  )
}
