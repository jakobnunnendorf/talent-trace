// app/page.tsx
import Categories from '@/components/Home/Categories/Categories'
import Companies from '@/components/Home/Companies/Companies'
import ContactUs from '@/components/Home/Contact-Us/ContactUs'
import FeaturedJobs from '@/components/Jobs/FeaturedJobs/FeaturedJobs'
import NewsCarousel from '@/components/Home/Industries/NewsCarousel'
import Services from '@/components/Home/Services/Services'
import Testimonials from '@/components/Home/Testimonials/Testimonials'

export const revalidate = 10

export default function Home() {
  return (
    <main>
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
///categories/15bc4d0e-f108-8006-8459-db946e2c998f
