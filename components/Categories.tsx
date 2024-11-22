import React from 'react'
import Image from 'next/image'

export default function Categories() {
  return (
    <div>
      <h2>Find jobs in your industry</h2>
      <ul className="grid grid-cols-2">
        <li>
          <Image
            src="/categories/Commodity icon.png"
            width={50}
            height={50}
            alt="Commodity Trading icon"
          />
          <p>Commodity Trading</p>
        </li>
        <li>
          <Image
            src="/categories/shipping icon.png"
            width={50}
            height={50}
            alt="Shipping icon"
          />
          <p>Shipping</p>
        </li>
        <li>
          <Image
            src="/categories/Supply chain icon.png"
            width={50}
            height={50}
            alt="Supply Chain icon"
          />
          <p>Supply Chain & Procurement</p>
        </li>
        <li>
          <Image
            src="/categories/robot icon.png"
            width={50}
            height={50}
            alt="Robotics icon"
          />
          <p>Robotics</p>
        </li>
        <li>
          <Image
            src="/categories/IT Icon.png"
            width={50}
            height={50}
            alt="IT icon"
          />
          <p>Information Technology</p>
        </li>
        <li>
          <Image
            src="/categories/Health icon.png"
            width={50}
            height={50}
            alt="Healthcare icon"
          />
          <p>Healthcare</p>
        </li>
        <li>
          <Image
            src="/categories/Pharma icon.png"
            width={50}
            height={50}
            alt="Pharmaceutical icon"
          />
          <p>Pharmaceutical</p>
        </li>
        <li>
          <Image
            src="/categories/Law icon.png"
            width={50}
            height={50}
            alt="Legal icon"
          />
          <p>Legal & Compliance</p>
        </li>
        <li>
          <Image
            src="/categories/Energy icon.png"
            width={50}
            height={50}
            alt="Energy icon"
          />
          <p>Energy & Renewable</p>
        </li>
        <li>
          <Image
            src="/categories/Media icon.png"
            width={50}
            height={50}
            alt="Media icon"
          />
          <p>Media & Advertising</p>
        </li>
        <li>
          <Image
            src="/categories/Commodity icon.png"
            width={50}
            height={50}
            alt="Other industries icon"
          />
          <p>Others</p>
        </li>
      </ul>
    </div>
  )
}
