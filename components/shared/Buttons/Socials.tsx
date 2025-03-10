import React from 'react'
import {
  SlEnvolope,
  SlSocialLinkedin,
  SlShare,
  SlBriefcase,
  SlBell,
} from 'react-icons/sl'
import Link from 'next/link'

const socialLinks = [
  {
    icon: <SlBell />,
    link: 'https://talent-trace.zohorecruit.com/forms/677184c20dcfb9044e43b5672ceb5e3530c617412e8922022dcc64355524d8f5',
    title: 'Get Alerts',
  },
  {
    icon: <SlBriefcase />,
    link: '/jobs',
    title: 'Jobs',
  },
  {
    icon: <SlSocialLinkedin />,
    link: 'https://www.linkedin.com/company/talenttrace/',
    title: 'LinkedIn',
  },
  {
    icon: <SlEnvolope />,
    link: 'mailto:pravin@talent-trace.com',
    title: 'Email',
  },
  {
    icon: <SlShare />,
    link: 'mailto:?subject=Talent%20Trace%20Referral&body=I%20thought%20you%20might%20be%20interested%20in%20checking%20out%20Talent%20Trace%20for%20your%20recruitment%20needs.%20Visit%20them%20at%3A%20https%3A%2F%2Ftalent-trace.com',
    title: 'Share',
  },
]

export default function Socials({
  color,
  vertical,
  size,
}: {
  color?: string
  vertical?: boolean
  size?: string
}) {
  return (
    <ul
      className={`flex ${vertical ? 'flex-col' : 'flex-row'} justify-center gap-4 px-1 ${vertical ? '' : 'py-8 md:py-6'} md:justify-start`}
    >
      {socialLinks.map((link, index) => (
        <IconLink
          key={index}
          icon={link.icon}
          iconTitle={link.title}
          link={link.link}
          color={color}
          vertical={vertical}
          size={size}
        />
      ))}
    </ul>
  )
}

export const IconLink = ({
  icon,
  iconTitle,
  link,
  color,
  size,
  vertical,
}: {
  icon: React.ReactNode
  iconTitle: string
  link?: string
  color?: string
  size?: string
  vertical?: boolean
}) => {
  return (
    <li className="flex flex-col items-center gap-1">
      <figure
        className={`${color ? `bg-${color} opacity-100` : 'border border-white opacity-50'} group flex h-12 w-12 items-center justify-center rounded-full p-2 text-2xl text-white hover:border-blue hover:bg-blue hover:opacity-100 hover:shadow-xl`}
      >
        {link ? (
          <Link className="group-hover:text-white" href={link}>
            {icon}
          </Link>
        ) : (
          icon
        )}
      </figure>
      <figcaption
        className={`text-center text-sm font-medium ${vertical ? 'text-gray-400' : 'text-white/50'}`}
      >
        {iconTitle}
      </figcaption>
    </li>
  )
}
