import React from 'react'

export default function Slider({
  activeCard,
  setActiveCard,
}: {
  activeCard: number
  setActiveCard: (index: number) => void
}) {
  return (
    <ul className="flex gap-4">
      <li>
        <button className="h-4 w-16 rounded-full bg-gradient-to-tr from-[#1098EF] to-[#41ADF2]"></button>
      </li>
      <li>
        <button className="h-4 w-4 rounded-full bg-gradient-to-tr from-[#1098EF] to-[#41ADF2]"></button>
      </li>
      <li>
        <button className="h-4 w-4 rounded-full bg-gradient-to-tr from-[#1098EF] to-[#41ADF2]"></button>
      </li>
      <li>
        <button className="h-4 w-4 rounded-full bg-gradient-to-tr from-[#1098EF] to-[#41ADF2]"></button>
      </li>
      <li>
        <button className="h-4 w-4 rounded-full bg-gradient-to-tr from-[#1098EF] to-[#41ADF2]"></button>
      </li>
    </ul>
  )
}
