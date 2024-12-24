import SubHero from '@/components/shared/Header/SubHero'

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <section>
      <SubHero
        headline={'Find the best jobs in your industry'}
        description="with Talent Trace"
      />
      {children}
    </section>
  )
}

export default Layout
