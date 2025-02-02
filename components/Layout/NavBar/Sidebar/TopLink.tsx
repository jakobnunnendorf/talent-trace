'use client'

import { SidebarGroupContent } from '@/components/ui/sidebar'
import React from 'react'
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import Link from 'next/link'
import { NavLink } from '../navlinkData'
import { iconMap } from './app-sidebar'
import { styles } from './app-sidebar'

export default function TopLink({
  section,
  onLinkClick,
}: {
  section: NavLink
  onLinkClick: () => void
}) {
  const Icon = iconMap[section.title]

  return (
    <div className="mt-8">
      <SidebarGroupContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href={section.relativePath} onClick={onLinkClick}>
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
