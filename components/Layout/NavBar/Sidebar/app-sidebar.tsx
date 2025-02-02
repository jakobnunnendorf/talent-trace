'use client'

import React from 'react'
import { LucideIcon } from 'lucide-react'
import {
  Home,
  UserSearch,
  BriefcaseBusiness,
  Newspaper,
  Phone,
} from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  useSidebar,
} from '@/components/ui/sidebar'
import { links } from '../navlinkData'
import Logo from '@/components/shared/Logo'
import { useState } from 'react'
import NestedLink from './NestedLink'
import TopLink from './TopLink'
import Image from 'next/image'

export const iconMap: Record<string, LucideIcon> = {
  Home: Home,
  Jobs: UserSearch,
  Services: BriefcaseBusiness,
  Explore: Newspaper,
  'Contact Us': Phone,
}

export const styles = {
  link: 'font-bold text-xl text-black',
  subLink: 'text-lg font-bold opacity-80',
  nestedContent: 'overflow-hidden transition-all duration-200',
}

export function AppSidebar() {
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({})
  const { toggleSidebar } = useSidebar()

  const toggleSection = (sectionTitle: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionTitle]: !prev[sectionTitle],
    }))
  }

  const handleLinkClick = () => {
    toggleSidebar()
  }

  return (
    <Sidebar>
      <div className="mx-auto w-36 pb-4 pt-12">
        <Image
          src="/logos/Talent Trace logo.png"
          alt="Talent Trace Logo"
          height={500}
          width={500}
        />
      </div>
      <SidebarContent>
        {Object.values(links).map((section) => (
          <SidebarGroup key={section.title}>
            {section.subLinks ? (
              <NestedLink
                section={section}
                expandedSections={expandedSections}
                toggleSection={toggleSection}
                onLinkClick={handleLinkClick}
              />
            ) : (
              <TopLink section={section} onLinkClick={handleLinkClick} />
            )}
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  )
}
