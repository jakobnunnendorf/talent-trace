import Companies from '@/components/Companies/Companies'
import ContactUs from '@/components/Contact/ContactUs'
import Hero from '@/components/Hero/Hero'
import Industries from '@/components/Industries/Industries'
import JobPreview from '@/components/Jobs/JobPreview'
import Services from '@/components/Services/Services'
import Testimonials from '@/components/Testimonials/Testimonials'

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Companies />
      <Industries />
      <JobPreview />
      <Services />
      <Testimonials />
      <ContactUs />
    </main>
  )
}
