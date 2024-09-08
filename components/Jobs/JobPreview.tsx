import React from 'react'

export default function JobPreview() {
  const jobs = [
    'Chartering Manager',
    'Operations Executive',
    'Vessel Operator',
    'Freight Research Analyst',
    'LNG Technical Superintendent',
    'Post Fixture/Laytime Manager',
  ]
  return (
    <div className="grid h-screen w-full place-content-center border">
      <h2 className="text-center font-sans text-3xl">Explore Jobs</h2>
      <p className="mx-auto mb-12 mt-4 w-2/3 text-center">
        We are committed to helping you find the perfect opportunity that
        matches your skills and aspirations. Get in touch with us today by
        applying below.
      </p>
      <ul className="grid h-[528px] grid-cols-2 grid-rows-3 gap-8">
        {jobs.map((job) => {
          return <Job key={job} name={job} />
        })}
      </ul>
      <button className="mx-auto mt-20 w-fit rounded-xl bg-[#1098EF] px-4 py-2 text-white">
        Load more listings
      </button>
    </div>
  )
}

function Job({ name }: { name: string }) {
  return (
    <div className="grid h-full w-full grid-cols-[1fr_2fr_1fr] grid-rows-5 border">
      <div className="col-span-3"></div>
      <h3 className="border text-xl">{name}</h3>
    </div>
  )
}
