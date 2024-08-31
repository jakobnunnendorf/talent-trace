import React from 'react'

export default function Hero() {
  return (
    <div className="grid h-screen w-full grid-rows-5 bg-cyan-800 text-white">
      <h1 className="text-10xl row-start-2 bg-gradient-to-b from-white bg-clip-text text-center text-transparent">
        Talent Trace
      </h1>
      <div className="row-span-2 row-start-3 mx-auto grid w-4/5">
        <div className="grid w-fit grid-rows-5">
          <p className="row-span-1 h-fit w-fit self-end text-lg font-bold">
            Talent Trace
          </p>
          <h2 className="row-span-2 row-start-2 w-fit text-6xl">
            Tracing Talent
            <br /> <span>Paving Careers</span>
          </h2>
          <div className="row-span-1 row-start-4 flex items-center gap-4">
            <div className="h-fit w-fit border bg-white px-5 py-3">
              <span className="text-black">Search Jobs</span>
            </div>
            <div className="h-fit w-fit border px-5 py-3">Find Talent</div>
          </div>
          <div className="row-span-1 row-start-5 flex w-fit items-center gap-9 px-9">
            <div className="grid h-8 w-8 place-content-center rounded-full border">
              f
            </div>
            <div className="grid h-8 w-8 place-content-center rounded-full border">
              in
            </div>
            <div className="grid h-8 w-8 place-content-center rounded-full border">
              X
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
