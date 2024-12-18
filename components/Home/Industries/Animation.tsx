import React from 'react'

export default function Animation() {
  return (
    <div className="grid h-full w-full place-content-center">
      <video
        src="/animation.mp4"
        width={500}
        height={500}
        autoPlay
        loop
        muted
      />
    </div>
  )
}
