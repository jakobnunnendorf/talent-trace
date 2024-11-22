import React from 'react'
import Image from 'next/image'

const categories = [
  {
    src: '/categories/Commodity icon.png',
    alt: 'Commodity Trading icon',
    text: 'Commodity Trading',
  },
  {
    src: '/categories/shipping icon.png',
    alt: 'Shipping icon',
    text: 'Shipping',
  },
  {
    src: '/categories/Supply chain icon.png',
    alt: 'Supply Chain icon',
    text: 'Supply Chain & Procurement',
  },
  {
    src: '/categories/robot icon.png',
    alt: 'Robotics icon',
    text: 'Robotics',
  },
  {
    src: '/categories/IT Icon.png',
    alt: 'IT icon',
    text: 'Information Technology',
  },
  {
    src: '/categories/Health icon.png',
    alt: 'Healthcare icon',
    text: 'Healthcare',
  },
  {
    src: '/categories/Pharma icon.png',
    alt: 'Pharmaceutical icon',
    text: 'Pharmaceutical',
  },
  {
    src: '/categories/Law icon.png',
    alt: 'Legal icon',
    text: 'Legal & Compliance',
  },
  {
    src: '/categories/Energy icon.png',
    alt: 'Energy icon',
    text: 'Energy & Renewable',
  },
  {
    src: '/categories/Media icon.png',
    alt: 'Media icon',
    text: 'Media & Advertising',
  },
  {
    src: '/categories/Commodity icon.png',
    alt: 'Other industries icon',
    text: 'Others',
  },
]

export default function Categories() {
  return (
    <section className="p-24">
      <h2 className="p-6 pb-12 text-center text-4xl">
        Find jobs in your industry
      </h2>
      <ul className="mx-auto grid w-fit grid-cols-3 grid-rows-4 gap-x-32 gap-y-4">
        {categories.map((category, index) => (
          <li key={index} className="flex flex-col items-center justify-center">
            <div className="hover:border-green flex h-full w-full flex-col items-center justify-center gap-2 rounded-lg p-4 hover:border hover:shadow-md">
              <Image
                src={category.src}
                width={50}
                height={50}
                alt={category.alt}
              />
              <p className="max-w-48 text-wrap text-center font-bold text-blue">
                {category.text}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
