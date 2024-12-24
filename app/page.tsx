// app/page.tsx
import Categories from '@/components/Home/Categories/Categories'
import Companies from '@/components/Home/Companies/Companies'
import ContactUs from '@/components/Home/Contact-Us/ContactUs'
import FeaturedJobs from '@/components/Jobs/FeaturedJobs/FeaturedJobs'
import Hero from '@/components/Home/Hero/Hero'
import NewsCarousel from '@/components/Home/Industries/NewsCarousel'
import Services from '@/components/Home/Services/Services'
import Testimonials from '@/components/Home/Testimonials/Testimonials'

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <Companies />
      <FeaturedJobs />
      <Categories />
      <Services />
      <Testimonials />
      <NewsCarousel />
      <ContactUs /> */}
    </main>
  )
}
