import React from 'react'

interface CardProps {
  LeftComponent: React.ComponentType
  RightComponent: React.ComponentType
}

export default function Card({ LeftComponent, RightComponent }: CardProps) {
  return (
    <article className="relative flex h-full w-[80vw] flex-shrink-0 items-center overflow-hidden rounded-3xl border shadow-2xl">
      <div className="absolute right-0 -z-10 h-full w-1/2 border-l bg-slate-50"></div>
      <div className="grid h-fit w-full grid-cols-2">
        <LeftComponent />
        <RightComponent />
      </div>
    </article>
  )
}
