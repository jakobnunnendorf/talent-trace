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

interface NestedLinkProps {
  section: NavLink
  expandedSections: Record<string, boolean>
  toggleSection: (sectionTitle: string) => void
}

const iconMap: Record<string, LucideIcon> = {
  Home: Home,
  Jobs: UserSearch,
  Services: BriefcaseBusiness,
  Explore: Newspaper,
  'Contact Us': Phone,
}

const styles = {
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

function TopLink({ section }: { section: NavLink }) {
  const Icon = iconMap[section.title]

  return (
    <div className="mt-8">
      <SidebarGroupContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href={section.relativePath}>
                {Icon && <Icon />}
                <span className={styles.link}>{section.title}</span>
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
}: NestedLinkProps) {
  if (!section.subLinks) return null

  const Icon = iconMap[section.title]
  const isExpanded = expandedSections[section.title]

  return (
    <div className="mt-8">
      <SidebarGroupLabel
        onClick={() => toggleSection(section.title)}
        className={`${styles.link} flex items-center gap-2`}
      >
        {Icon && <Icon />}
        {section.title}
        <ChevronDown
          className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
        />
      </SidebarGroupLabel>
      <SidebarGroupContent
        className={`${styles.nestedContent} ${isExpanded ? 'max-h-96' : 'max-h-0'}`}
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
                  <span className={styles.subLink}>{title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </div>
  )
}
