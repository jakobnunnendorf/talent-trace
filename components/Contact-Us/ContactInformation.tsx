import React, { ForwardRefExoticComponent, RefAttributes } from 'react'
import { MapPin, Clock, Phone, Mail, LucideProps, Linkedin } from 'lucide-react'
import Link from 'next/link'

interface ContactInfo {
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >
  type: string
  info: string
  link?: string
}
const contactInformation: ContactInfo[] = [
  {
    icon: Mail,
    type: 'Email',
    info: 'pravin@talent-trace.com',
    link: 'mailto:pravin@talent-trace.com',
  },
  { icon: Phone, type: 'Phone', info: '+6581398239', link: 'tel:+6581398239' },
  {
    icon: Clock,
    type: 'Office Hours',
    info: 'Monday to Friday, 9 AM - 6 PM (SGT)',
  },
  {
    icon: MapPin,
    type: 'Singapore (Headquarters)',
    info: 'Keppel Bay Tower, 1 Harbourfront Avenue, #13-20, S098632',
  },
  {
    icon: Linkedin,
    type: 'LinkedIn',
    info: 'Talent Trace',
    link: 'https://www.linkedin.com/company/talent-trace/',
  },
]

function ContactInfo({ info }: { info: ContactInfo }) {
  if (!info.link) {
    return <p className="mt-1">{info.info}</p>
  }
  return (
    <Link href={info.link}>
      <p className="mt-1 underline underline-offset-2 hover:text-blue">
        {info.info}
      </p>
    </Link>
  )
}

export default function ContactInformation() {
  return (
    <div className="space-y-6">
      {contactInformation.map((info) => {
        return (
          <div key={info.type + info.info} className="flex gap-x-4">
            <info.icon className="h-6 w-6 text-blue" />
            <div>
              <h3 className="font-semibold">{info.type}</h3>
              <ContactInfo info={info} />
            </div>
          </div>
        )
      })}
    </div>
  )
}
