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
import { links } from './navlinkData'

interface NavLinksProps {
  scrollDirection: 'up' | 'down'
}

export default function NavLinks({ scrollDirection }: NavLinksProps) {
  const visibilityClass =
    scrollDirection === 'down'
      ? 'invisible w-0 scale-x-0 opacity-0'
      : 'visible w-fit scale-x-100 opacity-100'

  const menuItemClass = `h-fit w-fit whitespace-nowrap transition-opacity duration-700 ease-in-out ${
    scrollDirection === 'down' ? 'opacity-0' : 'opacity-100'
  }`

  return (
    <NavigationMenu className={visibilityClass}>
      <NavigationMenuList className="items-center justify-between gap-12 rounded-full bg-blue/80 px-8 py-4 text-center text-white underline-offset-[6px] shadow-xl backdrop-blur-md transition-all duration-700 ease-in-out">
        {Object.values(links).map((link) => (
          <NavigationMenuItem key={link.title} className={menuItemClass}>
            {link.subLinks ? (
              <>
                <NavigationMenuTrigger className="bg-transparent text-sm hover:bg-blue/90">
                  {link.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    {Object.entries(link.subLinks).map(([title, subLink]) => (
                      <ListItem
                        key={title}
                        title={title}
                        href={subLink.relativePath}
                        isExternal={subLink.isExternal}
                      >
                        {subLink.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <Link href={link.relativePath} legacyBehavior passHref>
                <NavigationMenuLink className="text-sm hover:text-white/80">
                  {link.title}
                </NavigationMenuLink>
              </Link>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'> & { isExternal?: boolean }
>(({ className, title, children, isExternal, ...props }, ref) => {
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
          {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
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
