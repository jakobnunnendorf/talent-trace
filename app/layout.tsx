import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar/NavBar'
import Footer from '@/components/Footer/Footer'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/app-sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Talent Trace',
  description: 'Tracing Talent Paving Careers',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://static.zohocdn.com/recruit/embed_careers_site/css/v1.1/embed_jobs.css"
          type="text/css"
        />
      </head>
      <body className={inter.className}>
        <header className="= fixed z-50 w-full py-7">
          <NavBar />
        </header>
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
