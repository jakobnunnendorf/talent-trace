import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const SocialLinks: React.FC = () => {
  return (
    <div className="flex space-x-4 py-4">
      <Link
        href="https://facebook.com"
        className="text-gray-600 hover:text-gray-800"
      >
        <Image src="/Facebook.png" alt="Facebook" width={30} height={30} />
      </Link>
      <Link
        href="https://twitter.com"
        className="text-gray-600 hover:text-gray-800"
      >
        <Image src="/Twitter.png" alt="X" width={30} height={30} />
      </Link>
      <Link
        href="https://instagram.com"
        className="text-gray-600 hover:text-gray-800"
      >
        <Image src="/Instagram.png" alt="Instagram" width={30} height={30} />
      </Link>
    </div>
  )
}

export default SocialLinks
