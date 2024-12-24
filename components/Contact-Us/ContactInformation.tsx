import React, { ForwardRefExoticComponent, RefAttributes } from 'react'
import { MapPin, Clock, Phone, Mail, LucideProps } from 'lucide-react'

interface ContactInfo {
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >
  type: string
  info: string
}

const contactInformation: ContactInfo[] = [
  { icon: Mail, type: 'Email', info: 'support@talenttrace.com' },
  { icon: Phone, type: 'Phone', info: '+65 8139 8239' },
  {
    icon: Clock,
    type: 'Office Hours',
    info: 'Monday to Friday, 9 AM - 6 PM (SGT)',
  },
  {
    icon: MapPin,
    type: 'Singapore (Headquarters)',
    info: '[Insert Address]',
  },
]

export default function ContactInformation() {
  return (
    <div className="space-y-6">
      {contactInformation.map((info) => {
        return (
          <div key={info.type + info.info} className="flex gap-x-4">
            <info.icon className="h-6 w-6 text-blue" />
            <div>
              <h3 className="font-semibold">{info.type}</h3>
              <p className="mt-1">{info.info}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
