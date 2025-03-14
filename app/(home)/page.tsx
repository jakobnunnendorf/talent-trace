// app/page.tsx
import Categories from '@/components/Home/Categories/Categories'
import Companies from '@/components/Home/Companies/Companies'
import FeaturedJobs from '@/components/Home/FeaturedJobs/FeaturedJobs'
import NewsCarousel from '@/components/Home/Industries/NewsCarousel'
import Services from '@/components/Home/Services/Services'
import Testimonials from '@/components/Home/Testimonials/Testimonials'

export const revalidate = 3600

export default function Home() {
  return (
    <main>
      <Companies />
      <FeaturedJobs />
      <Categories />
      <Services />
      <Testimonials />
      <NewsCarousel />
    </main>
  )
}
