'use client'

import React from 'react'
import { LucideIcon, ChevronDown } from 'lucide-react'
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
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { links } from '../navlinkData'
import Link from 'next/link'
import Logo from '@/components/shared/Logo'
import { useState } from 'react'
import { NavLink } from '../navlinkData'

// Map titles to icons
const iconMap: Record<string, LucideIcon> = {
  Home: Home,
  Jobs: UserSearch,
  Services: BriefcaseBusiness,
  Explore: Newspaper,
  'Contact Us': Phone,
}

const linkStyle = 'font-bold text-xl text-black'

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

function TopLink({ section }: { section: NavLink }) {
  return (
    <div className="mt-8">
      <SidebarGroupContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href={section.relativePath}>
                {iconMap[section.title] &&
                  React.createElement(iconMap[section.title])}
                <span className={linkStyle}>{section.title}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </div>
  )
}

function NestedLink({
  section,
  expandedSections,
  toggleSection,
}: {
  section: NavLink
  expandedSections: Record<string, boolean>
  toggleSection: (sectionTitle: string) => void
}) {
  if (!section.subLinks) {
    return null
  }
  console.log(JSON.stringify(section, null, 2))
  return (
    <div className="mt-8">
      <SidebarGroupLabel
        onClick={() => toggleSection(section.title)}
        className={`${linkStyle} flex items-center gap-2`}
      >
        {iconMap[section.title] && React.createElement(iconMap[section.title])}
        {section.title}
        <ChevronDown
          className={`h-4 w-4 transition-transform ${
            expandedSections[section.title] ? 'rotate-180' : ''
          }`}
        />
      </SidebarGroupLabel>
      <SidebarGroupContent
        className={`overflow-hidden transition-all duration-200 ${
          expandedSections[section.title] ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <SidebarMenu className="mt-4">
          {Object.entries(section.subLinks).map(([title, subLink]) => (
            <SidebarMenuItem key={title}>
              <SidebarMenuButton asChild>
                <Link
                  href={subLink.relativePath}
                  {...(subLink.isExternal && {
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  })}
                >
                  <span className="text-lg font-bold opacity-80">{title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </div>
  )
}
