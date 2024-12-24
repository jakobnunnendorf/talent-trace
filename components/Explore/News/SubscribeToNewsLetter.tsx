import { Button } from '@/components/ui/button'
import React from 'react'

export default function SubscribeToNewsLetter() {
  return (
    <section id='subscribe-newsletter' className="px-6 py-12">
      <h2 className="text-center text-3xl font-bold">Don’t Miss a Post!</h2>
      <p className="mx-auto mt-4 max-w-3xl text-center text-lg">
        Subscribe to our newsletter for expert insights and the latest updates
        from Talent Trace.
      </p>
      <form className="mx-auto mt-8 flex max-w-md flex-col items-center space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full rounded border border-gray-300 px-4 py-2 focus:border-blue focus:ring-blue"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full rounded border border-gray-300 px-4 py-2 focus:border-blue focus:ring-blue"
        />
        <Button
          type="submit"
          className="hover:bg-green-600 rounded bg-green px-6 py-3 font-semibold text-white transition"
        >
          Subscribe Now
        </Button>
      </form>
    </section>
  )
}
