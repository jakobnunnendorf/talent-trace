import React from 'react'
import { SlEnvolope, SlSocialLinkedin, SlPhone, SlShare } from 'react-icons/sl'
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
    {
      icon: <SlShare />,
      link: 'mailto:?subject=Talent%20Trace%20Referral&body=I%20thought%20you%20might%20be%20interested%20in%20checking%20out%20Talent%20Trace%20for%20your%20recruitment%20needs.%20Visit%20them%20at%3A%20https%3A%2F%2Ftalent-trace.com',
    },
  ]
  return (
    <ul className="flex justify-center gap-4 px-1 py-8 md:justify-start md:py-6">
      {socialLinks.map((link, index) => (
        <IconLink key={index} icon={link.icon} link={link.link} dark={dark} />
      ))}
    </ul>
  )
}
