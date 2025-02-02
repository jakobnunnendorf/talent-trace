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
import { Sidebar, SidebarContent, SidebarGroup } from '@/components/ui/sidebar'
import { links } from '../navlinkData'
import Logo from '@/components/shared/Logo'
import { useState } from 'react'
import NestedLink from './NestedLink'
import TopLink from './TopLink'

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

  const toggleSection = (sectionTitle: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionTitle]: !prev[sectionTitle],
    }))
  }

  return (
    <Sidebar>
      <div className="pb-4 pt-12">
        <Logo />
      </div>
      <SidebarContent>
        {Object.values(links).map((section) => (
          <SidebarGroup key={section.title}>
            {section.subLinks ? (
              <NestedLink
                section={section}
                expandedSections={expandedSections}
                toggleSection={toggleSection}
              />
            ) : (
              <TopLink section={section} />
            )}
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  )
}
