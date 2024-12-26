import DirectContact from '@/components/Contact-Us/DirectContact'
import { ContactForm } from '../../components/Contact-Us/ContactForm'
import SubHero from '@/components/shared/Header/SubHero'

export default function ContactPage() {
  return (
    <div>
      <SubHero
        headline="Let's Connect!"
        description="Have a question, feedback, or inquiry? We'd love to hear from you. Our
          team is here to help you with all your recruitment and HR needs."
      />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-16 gap-y-8 py-16 lg:grid-cols-5">
        <DirectContact />
        <div className="rounded-xl bg-white p-8 lg:col-span-3">
          <h2 className="mb-8 text-2xl font-bold">Send Us a Message</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
