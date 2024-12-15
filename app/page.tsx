// app/page.tsx
import Categories from '@/components/Categories/Categories'
import Companies from '@/components/Companies/Companies'
import ContactUs from '@/components/Contact/ContactUs'
import FeaturedJobs from '@/components/FeaturedJobs/FeaturedJobs'
import Hero from '@/components/Hero/Hero'
import NewsCarousel from '@/components/Industries/NewsCarousel'
import Services from '@/components/Services/Services'
import Testimonials from '@/components/Testimonials/Testimonials'

export default function Home() {
  return (
    <main>
      <Hero />
      <Companies />
      <FeaturedJobs />
      <Categories />
      <Services />
      <Testimonials />
      <NewsCarousel />
      <ContactUs />
    </main>
  )
}
