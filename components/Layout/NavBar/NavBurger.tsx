'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { useSidebar } from '@/components/ui/sidebar'
import { SlMenu } from 'react-icons/sl'
import { IconLink } from '@/components/shared/Buttons/Socials'

export default function NavBurger() {
  const { openMobile, toggleSidebar } = useSidebar()

  return (
    <Button
      onClick={toggleSidebar}
      className={`h-12 w-12 transform-gpu gap-0 rounded-full bg-blue transition-all duration-500 ease-in-out md:hidden ${
        openMobile
          ? 'invisible scale-0 opacity-0'
          : 'visible scale-100 opacity-100'
      }`}
    >
      <IconLink icon={<SlMenu />} link="/" color="blue" size="2xl" />
    </Button>
  )
}
