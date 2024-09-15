import React from 'react'

export default function ActionButtons() {
  return (
    <div className="my-8 flex items-center gap-4 text-white md:row-span-1 md:row-start-4">
      <button className="h-fit w-fit border bg-white px-5 py-3">
        <span className="text-black">Search Jobs</span>
      </button>
      <button className="h-fit w-fit border px-5 py-3">Find Talent</button>
    </div>
  )
}
