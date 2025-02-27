'use client'
import React from 'react'
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
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function NavLinks() {
  const router = useRouter()

  return (
    <NavigationMenu className="hidden text-white md:block">
      <NavigationMenuList className="grid grid-cols-4 gap-12">
        {Object.values(links).map((link) => (
          <NavigationMenuItem
            key={link.title}
            className={`flex h-16 min-w-28 items-center justify-center rounded-full bg-blue/80 px-4 py-4`}
          >
            {link.subLinks ? (
              <>
                <NavigationMenuTrigger
                  onClick={() => router.push(link.relativePath)}
                  className="bg-transparent text-sm hover:bg-blue/90"
                >
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
              <SimpleLink href={link.relativePath} title={link.title} />
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const SimpleLink = ({ href, title }: { href: string; title: string }) => {
  return (
    <div>
      <Link href={href} legacyBehavior passHref>
        <NavigationMenuLink className="my-auto text-sm hover:text-white/80">
          {title}
        </NavigationMenuLink>
      </Link>
    </div>
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
