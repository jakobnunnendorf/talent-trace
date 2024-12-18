import Link from 'next/link'

const CTALink = ({
  text,
  primary,
  link,
}: {
  text: string
  primary: boolean
  link: string
}) => {
  return (
    <Link
      href={link}
      className={`hover:bg-blue hover:border-blue group h-fit w-fit border px-5 py-3 ${primary ? 'bg-white' : ''}`}
    >
      <span
        className={`group-hover:text-white ${primary ? 'text-black' : 'text-white'}`}
      >
        {text}
      </span>
    </Link>
  )
}

export default CTALink
