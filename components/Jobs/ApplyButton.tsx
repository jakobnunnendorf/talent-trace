import Image from 'next/image'

export default function ApplyButton() {
  return (
    <button className="group flex items-center gap-2 rounded-md px-4 py-2 text-sm transition-colors duration-300">
      <p className="font-sans font-semibold text-[#1098EF] group-hover:text-blue-700">
        Apply Now
      </p>
      <figure className="flex items-center justify-center rounded-full border border-[#1098EF] p-2 group-hover:border-blue-700 group-hover:shadow-xl">
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
