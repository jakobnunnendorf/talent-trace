import React from 'react'
import LogoBanner from './LogoBanner'

// TODO pull from notion

export default function Companies() {
  return (
    <div className="text-center md:grid md:grid-rows-4">
      <div className="row-start-2">
        <h2 className="text-3xl">Top Companies hiring at Talent Trace</h2>
        <h4 className="text-md mt-1 py-4 text-gray-500 md:py-0">
          We have longstanding business relations with
        </h4>
      </div>
      <LogoBanner />
    </div>
  )
}
