import Image from 'next/image'

export default function ApplyButton() {
  return (
    <button className="group flex items-center gap-2 rounded-md px-4 py-2 text-sm transition-colors duration-300">
      <p className="text-blue font-sans font-semibold group-hover:text-blue-700">
        Apply Now
      </p>
      <figure className="border-blue flex items-center justify-center rounded-full border p-2 group-hover:border-blue-700 group-hover:shadow-xl">
        <Image
          src="/upload cv icon blue.svg"
          alt="Upload CV"
          width={20}
          height={20}
        />
      </figure>
    </button>
  )
}
