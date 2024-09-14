import Image from 'next/image'

export default function CompanyLogo({
  src,
  alt,
}: {
  src: string
  alt: string
}) {
  return (
    <figure className="py-4">
      <Image src={src} alt={alt} width={120} height={120} />
    </figure>
  )
}
