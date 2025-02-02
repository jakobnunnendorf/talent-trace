'use client'

import React from 'react'
import { LucideIcon, Phone, ChevronDown } from 'lucide-react'
import {
  Home,
  UserSearch,
  Workflow,
  BriefcaseBusiness,
  ChartLine,
  Users,
  Cake,
  Newspaper,
  Upload,
  Inbox,
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
import { links } from './navlinkData'
import Link from 'next/link'
import Logo from '@/components/shared/Logo'
import { useState } from 'react'

// Map of paths to icons
const iconMap: Record<string, LucideIcon> = {
  '/': Home,
  '/jobs': UserSearch,
  '/services/executive-search': BriefcaseBusiness,
  '/services/contingent-search': Workflow,
  '/services/consultancy': ChartLine,
  '/explore/about-us': Users,
  '/explore/join-us': Cake,
  '/explore/news': Newspaper,
  '/jobs/post#post-job-form': Phone,
  '/contact-us': Inbox,
  'https://talent-trace.zohorecruit.com/forms/677184c20dcfb9044e43b5672ceb5e3530c617412e8922022dcc64355524d8f5':
    Upload,
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

  const linkStyle = 'font-bold text-xl text-black'
  return (
    <Sidebar>
      <div className="pt-12">
        <Logo />
      </div>
      <SidebarContent>
        {Object.values(links).map((section) => (
          <SidebarGroup key={section.title}>
            {section.subLinks ? (
              <>
                <SidebarGroupLabel
                  onClick={() => toggleSection(section.title)}
                  className={linkStyle}
                >
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
                  <SidebarMenu>
                    {Object.entries(section.subLinks).map(
                      ([title, subLink]) => (
                        <SidebarMenuItem key={title}>
                          <SidebarMenuButton asChild>
                            <Link
                              href={subLink.relativePath}
                              {...(subLink.isExternal && {
                                target: '_blank',
                                rel: 'noopener noreferrer',
                              })}
                            >
                              {iconMap[subLink.relativePath] &&
                                React.createElement(
                                  iconMap[subLink.relativePath]
                                )}
                              <span className={linkStyle}>{title}</span>
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      )
                    )}
                  </SidebarMenu>
                </SidebarGroupContent>
              </>
            ) : (
              <>
                <SidebarGroupLabel>{section.title}</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link href={section.relativePath}>
                          {iconMap[section.relativePath] &&
                            React.createElement(iconMap[section.relativePath])}
                          <span className={linkStyle}>{section.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </>
            )}
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  )
}
