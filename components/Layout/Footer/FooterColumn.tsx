import React from 'react'
import Link from 'next/link'

interface FooterLink {
  href: string
  text: string
}

interface FooterColumnProps {
  title: string
  links: FooterLink[]
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => {
  return (
    <div className="mx-auto flex flex-col md:mx-0">
      <div className="mb-1 gap-y-2 font-semibold">{title}</div>
      <ul className="mt-4 flex flex-col gap-4">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className="text-sm text-gray-600 hover:text-gray-800"
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterColumn
