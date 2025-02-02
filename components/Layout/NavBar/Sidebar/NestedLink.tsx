'use client'

import React from 'react'
import { ChevronDown } from 'lucide-react'
import {
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import Link from 'next/link'
import { NavLink } from '../navlinkData'
import { iconMap, styles } from './app-sidebar'

interface NestedLinkProps {
  section: NavLink
  expandedSections: Record<string, boolean>
  toggleSection: (sectionTitle: string) => void
}

export default function NestedLink({
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
