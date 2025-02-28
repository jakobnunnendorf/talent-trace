import React from 'react'
import {
  SlEnvolope,
  SlSocialLinkedin,
  SlPhone,
  SlShare,
  SlBriefcase,
} from 'react-icons/sl'
import Link from 'next/link'

export const IconLink = ({
  icon,
  link,
  color,
  size,
}: {
  icon: React.ReactNode
  link?: string
  color?: string
  size?: string
  vertical?: boolean
}) => {
  return (
    <li
      className={`${color ? `bg-${color} text-white opacity-100` : 'border border-white text-white opacity-50'} ${size ? `p-${size}` : ''} group flex items-center justify-center rounded-full p-2 text-2xl hover:border-blue hover:bg-blue hover:opacity-100 hover:shadow-xl`}
    >
      {link ? (
        <Link className="group-hover:text-white" href={link}>
          {icon}
        </Link>
      ) : (
        icon
      )}
    </li>
  )
}

export default function Socials({
  color,
  vertical,
  size,
}: {
  color?: string
  vertical?: boolean
  size?: string
}) {
  const socialLinks = [
    {
      icon: <SlBriefcase />,
      link: 'https://talent-trace.zohorecruit.com/forms/677184c20dcfb9044e43b5672ceb5e3530c617412e8922022dcc64355524d8f5',
    },
    {
      icon: <SlSocialLinkedin />,
      link: 'https://www.linkedin.com/company/talenttrace/',
    },
    { icon: <SlPhone />, link: 'tel:+6581398239' },
    { icon: <SlEnvolope />, link: 'mailto:pravin@talent-trace.com' },
    {
      icon: <SlShare />,
      link: 'mailto:?subject=Talent%20Trace%20Referral&body=I%20thought%20you%20might%20be%20interested%20in%20checking%20out%20Talent%20Trace%20for%20your%20recruitment%20needs.%20Visit%20them%20at%3A%20https%3A%2F%2Ftalent-trace.com',
    },
  ]
  return (
    <ul
      className={`flex ${vertical ? 'flex-col' : 'flex-row'} justify-center gap-4 px-1 py-8 md:justify-start md:py-6`}
    >
      {socialLinks.map((link, index) => (
        <IconLink
          key={index}
          icon={link.icon}
          link={link.link}
          color={color}
          vertical={vertical}
          size={size}
        />
      ))}
    </ul>
  )
}
