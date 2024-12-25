import React from 'react'
import { SlEnvolope, SlSocialLinkedin, SlPhone } from 'react-icons/sl'
import Link from 'next/link'

const IconLink = ({
  icon,
  link,
  dark,
}: {
  icon: React.ReactNode
  link: string
  dark?: boolean
}) => {
  return (
    <li
      className={`${dark ? 'border-black' : 'border-white'} group flex items-center justify-center rounded-full border p-2 text-2xl opacity-50 hover:border-blue hover:bg-blue hover:opacity-100 hover:shadow-xl`}
    >
      <Link className="group-hover:text-white" href={link}>
        {icon}
      </Link>
    </li>
  )
}

export default function Socials({ dark }: { dark?: boolean }) {
  const socialLinks = [
    {
      icon: <SlSocialLinkedin />,
      link: 'https://www.linkedin.com/company/talent-trace/',
    },
    { icon: <SlPhone />, link: 'tel:+6581398239' },
    { icon: <SlEnvolope />, link: 'mailto:pravin@talent-trace.com' },
  ]
  return (
    <ul className="flex justify-center gap-4 px-1 py-8 md:justify-start md:py-6">
      {socialLinks.map((link, index) => (
        <IconLink key={index} icon={link.icon} link={link.link} dark={dark} />
      ))}
    </ul>
  )
}
