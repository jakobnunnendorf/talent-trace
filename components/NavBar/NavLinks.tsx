import React from 'react'

export default function NavLinks() {
  const links = [
    { title: 'Home', relativePath: '/' },
    { title: 'Jobs', relativePath: '/jobs' },
    { title: 'Explore', relativePath: '/explore' },
    { title: 'Join us', relativePath: '/join-us' },
    { title: 'Consultancy', relativePath: '/consultancy' },
    { title: 'Contact us', relativePath: '/contact-us' },
  ]
  return (
    <ul className="hidden flex-grow items-center justify-between gap-12 text-center lg:flex">
      {links.map((link) => {
        return (
          <li key={link.title} className="h-fit w-fit">
            <p className="text-sm">{link.title}</p>
          </li>
        )
      })}
    </ul>
  )
}
