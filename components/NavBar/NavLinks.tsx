'use client'
import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

interface NavLinksProps {
  scrollDirection: 'up' | 'down'
}

export default function NavLinks({ scrollDirection }: NavLinksProps) {
  const regularLinks = [
    { title: 'Home', relativePath: '/' },
  ]

  const jobLinks = [
    { 
      title: 'Find a Job', 
      relativePath: '/jobs/find',
      description: 'Browse open positions and take the next step in your career.'
    },
    { 
      title: 'Post a Job', 
      relativePath: '/jobs/post',
      description: 'Looking to hire? Submit your job requirements and reach top talent.'
    }
  ]

  const serviceLinks = [
    { 
      title: 'Executive Search', 
      relativePath: '/services/executive-search',
      description: 'Premium search service for senior and executive-level positions.'
    },
    { 
      title: 'Contingent Search', 
      relativePath: '/services/contingent-search',
      description: 'Flexible recruitment solutions for professional and specialist roles.'
    },
    { 
      title: 'Consultancy', 
      relativePath: '/services/consultancy',
      description: 'Strategic HR and recruitment consulting services for your business.'
    }
  ]

  const exploreLinks = [
    { 
      title: 'About Us', 
      relativePath: '/about-us',
      description: 'Learn more about our company, mission, and values.'
    },
    { 
      title: 'Join the Team', 
      relativePath: '/join-us',
      description: 'Explore career opportunities and become part of our team.'
    },
    { 
      title: 'Latest News', 
      relativePath: '/news',
      description: 'Stay updated with our latest company news, insights, and industry trends.'
    }
  ]

  const contactLinks = [
    { 
      title: 'Schedule a Call', 
      relativePath: '/contact-us/schedule',
      description: 'Book a consultation call with one of our recruitment specialists.'
    },
    { 
      title: 'Send us a Message', 
      relativePath: '/contact-us/message',
      description: 'Get in touch with our team through our contact form.'
    },
    { 
      title: 'Upload CV', 
      relativePath: '/contact-us/upload-cv',
      description: 'Submit your CV to our talent pool for future opportunities.'
    }
  ]

  const newMenu = (
    <NavigationMenu
      className={`hidden lg:flex ${
        scrollDirection === 'down'
          ? 'invisible w-0 scale-x-0 opacity-0'
          : 'visible w-fit scale-x-100 opacity-100'
      }`}
    >
      <NavigationMenuList className="items-center justify-between gap-12 rounded-full bg-blue/80 px-8 py-4 text-center text-white underline-offset-[6px] shadow-xl backdrop-blur-md transition-all duration-700 ease-in-out">
        {/* Home link */}
        {regularLinks.map((link) => (
          <NavigationMenuItem 
            key={link.title}
            className={`h-fit w-fit whitespace-nowrap transition-opacity duration-700 ease-in-out ${
              scrollDirection === 'down' ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <Link href={link.relativePath} legacyBehavior passHref>
              <NavigationMenuLink className="text-sm hover:text-white/80">
                {link.title}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}

        {/* Jobs dropdown */}
        <NavigationMenuItem
          className={`h-fit w-fit whitespace-nowrap transition-opacity duration-700 ease-in-out ${
            scrollDirection === 'down' ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <NavigationMenuTrigger className="text-sm bg-transparent hover:bg-blue/90">
            Jobs
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4">
              {jobLinks.map((link) => (
                <ListItem
                  key={link.title}
                  title={link.title}
                  href={link.relativePath}
                >
                  {link.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Services dropdown */}
        <NavigationMenuItem
          className={`h-fit w-fit whitespace-nowrap transition-opacity duration-700 ease-in-out ${
            scrollDirection === 'down' ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <NavigationMenuTrigger className="text-sm bg-transparent hover:bg-blue/90">
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4">
              {serviceLinks.map((link) => (
                <ListItem
                  key={link.title}
                  title={link.title}
                  href={link.relativePath}
                >
                  {link.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Explore dropdown */}
        <NavigationMenuItem
          className={`h-fit w-fit whitespace-nowrap transition-opacity duration-700 ease-in-out ${
            scrollDirection === 'down' ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <NavigationMenuTrigger className="text-sm bg-transparent hover:bg-blue/90">
            Explore
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4">
              {exploreLinks.map((link) => (
                <ListItem
                  key={link.title}
                  title={link.title}
                  href={link.relativePath}
                >
                  {link.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Contact us dropdown */}
        <NavigationMenuItem
          className={`h-fit w-fit whitespace-nowrap transition-opacity duration-700 ease-in-out ${
            scrollDirection === 'down' ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <NavigationMenuTrigger className="text-sm bg-transparent hover:bg-blue/90">
            Contact us
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4">
              {contactLinks.map((link) => (
                <ListItem
                  key={link.title}
                  title={link.title}
                  href={link.relativePath}
                >
                  {link.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )

  return newMenu
}

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Alert Dialog',
    href: '/docs/primitives/alert-dialog',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Hover Card',
    href: '/docs/primitives/hover-card',
    description:
      'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Progress',
    href: '/docs/primitives/progress',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Scroll-area',
    href: '/docs/primitives/scroll-area',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '/docs/primitives/tabs',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '/docs/primitives/tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
]

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components that you can copy and
                      paste into your apps. Accessible. Customizable. Open
                      Source.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'
