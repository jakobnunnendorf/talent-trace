import Hero from '@/components/Home/Hero/Hero'

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <Hero />
      {children}
    </section>
  )
}
