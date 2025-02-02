import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import NavBar from '@/components/Layout/NavBar/NavBar'
import Footer from '@/components/Layout/Footer/Footer'
import { SidebarProvider } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/Layout/NavBar/Sidebar/app-sidebar'
import { Toaster } from 'sonner'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

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
        <Script
          src="https://code.jquery.com/jquery-3.6.0.min.js"
          strategy="afterInteractive"
          id="jquery"
        />
        <SidebarProvider defaultOpen={false}>
          <AppSidebar />
          <header className="fixed z-50 w-full">
            <NavBar />
          </header>
          <main className="relative w-full">
            {children}
            <Analytics />
            <SpeedInsights />
          </main>
        </SidebarProvider>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
