import React, { Suspense } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Skeleton } from '@/components/ui/skeleton'

export default function CategoryIcon({
  icon,
  categoryName,
  href,
}: {
  icon: string
  categoryName: string
  href: string
}) {
  return (
    <Link href={href}>
      <li className="flex flex-col items-center justify-center">
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 rounded-lg p-4 hover:border hover:border-green hover:shadow-md">
          <Suspense
            fallback={<Skeleton className="h-[50px] w-[50px] rounded-full" />}
          >
            <Image src={icon} width={50} height={50} alt={categoryName} />
          </Suspense>
          <p className="max-w-48 text-wrap text-center font-bold text-blue">
            {categoryName}
          </p>
        </div>
      </li>
    </Link>
  )
}
