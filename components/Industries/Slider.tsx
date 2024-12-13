import React from 'react'
import { Button } from '../ui/button'

interface DotProps {
  isActive: boolean
  onClick: () => void
}

const Dot: React.FC<DotProps> = ({ isActive, onClick }) => (
  <Button
    onClick={onClick}
    className={`from-blue h-4 rounded-full bg-gradient-to-tr to-[#41ADF2] transition-all duration-300 ${
      isActive ? 'w-16' : 'w-4'
    }`}
  ></Button>
)

interface SliderProps {
  activeCard: number
  setActiveCard: (index: number) => void
  totalCards: number
}

export default function Slider({
  activeCard,
  setActiveCard,
  totalCards,
}: SliderProps) {
  return (
    <ul className="flex gap-4">
      {[...Array(totalCards)].map((_, index) => (
        <li key={index}>
          <Dot
            isActive={index === activeCard}
            onClick={() => setActiveCard(index)}
          />
        </li>
      ))}
    </ul>
  )
}
