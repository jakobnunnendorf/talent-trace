import Image from 'next/image'

const JobIcon = ({
  src,
  alt,
  text,
  iconSize = 18, // Add this line with a default value
}: {
  src: string
  alt: string
  text: string
  iconSize?: number // Add this line
}) => (
  <div className="flex items-center justify-center gap-2">
    <Image src={src} alt={alt} width={iconSize} height={iconSize} />
    <p className="font-sans text-sm text-[#696969]">{text}</p>
  </div>
)

export default JobIcon
