'use client'
import React from 'react'
import Link from 'next/link'

interface NavLinksProps {
  scrollDirection: 'up' | 'down'
}

export default function NavLinks({ scrollDirection }: NavLinksProps) {
  const links = [
    { title: 'Home', relativePath: '/' },
    { title: 'Jobs', relativePath: '/jobs' },
    { title: 'About', relativePath: '/about-us' },
    { title: 'Join the team', relativePath: '/join-us' },
    { title: 'Consultancy', relativePath: '/consultancy' },
    { title: 'Contact us', relativePath: '/contact-us' },
  ]

  return (
    <ul
      className={`hidden items-center justify-between gap-12 rounded-full bg-blue/80 px-8 py-4 text-center text-white underline-offset-[6px] shadow-xl backdrop-blur-md transition-all duration-700 ease-in-out lg:flex ${
        scrollDirection === 'down'
          ? 'invisible w-0 scale-x-0 opacity-0'
          : 'visible w-fit scale-x-100 opacity-100'
      }`}
    >
      {links.map((link) => (
        <li
          key={link.title}
          className={`h-fit w-fit whitespace-nowrap transition-opacity duration-700 ease-in-out ${
            scrollDirection === 'down' ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <Link href={link.relativePath}>
            <p className="text-sm">{link.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  )
}
