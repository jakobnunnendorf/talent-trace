'use client'
import React from 'react'
import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'

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

  return (
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
