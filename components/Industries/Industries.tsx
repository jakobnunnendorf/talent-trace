'use client'

import React, { useRef, useState } from 'react'
import { motion, useTransform, useScroll, PanInfo } from 'framer-motion'
import Card from './Card'
import Slider from './Slider'
import Animation from './Animation'
import Text from './Text'
import { NewsImage, NewsContent } from './News'

const cardData = [
  { LeftComponent: Animation, RightComponent: Text },
  {
    LeftComponent: () => (
      <NewsImage imageUrl="/news1.jpeg" headline="Headline 1" />
    ),
    RightComponent: () => (
      <NewsContent
        headline="Shipping Container Shortage and the Problems in Maritime Logistics"
        introduction="The COVID-19 pandemic brought about a number of disruptions to daily livelihoods of people, multiple industries and the global economy. The problems from 2020 continue to have their impact in 2021 as well, the existing shipping container shortage being one of them. Logistics and shipping work hand in hand and affect the prices of goods and services across the globe. When disruptions emerge in these industries, the consequences are faced by the world."
        author="Pravin Nyanes"
        date="August 16, 2021"
        category="Developement, News"
      />
    ),
  },
  {
    LeftComponent: () => (
      <NewsImage
        imageUrl="/news2.jpg"
        headline="Labour Shortage Singapore & its Link to Rising Prices of Commodities"
      />
    ),
    RightComponent: () => (
      <NewsContent
        headline="Labour Shortage Singapore & its Link to Rising Prices of Commodities"
        introduction="The world will soon enter a post-pandemic era. While there are new variants of the COVID-19 virus that are still a threat to the world, the aggressive vaccination drives and safety protocols in place around the world have ensured that the world can go back to what it was in 2019 soon enough. Anticipating this post-pandemic era, there has been a sudden surge in demand for goods and services, causing a threat of inflation in 2021. Basic commodities such as wood, oil and agricultural products are in high demand. There are a lot of industries related to these three primary industries that have also noticed a surge, which include the shipping industry, transportation, and supply chain management. Organizations are opening up job postings and offering employment like never before to meet the needs."
        author="Pravin Nyanes"
        date="August 8, 2021"
        category="Career counseling"
      />
    ),
  },
  {
    LeftComponent: () => (
      <NewsImage
        imageUrl="/news3.png"
        headline="Recruitment Trends in 2021 for Hiring and Talent Acquisition"
      />
    ),
    RightComponent: () => (
      <NewsContent
        headline="Recruitment Trends in 2021 for Hiring and Talent Acquisition"
        introduction="Recruitment trends in 2021 have evolved on a global scale. Hiring trends need to keep up with the changes in workforce and employment due to the pandemic. This has altered the way recruitment has been approached by candidates, recruiters and organizations as a whole. While there are industries still suffering from the economic fallout, new recruitment trends during COVID-19 are emerging to keep up with these changes. Read on to find out the most impactful and prominent recruitment trends of 2021."
        author="Pravin Nyanes"
        date="August 4, 2021"
        category="Developement"
      />
    ),
  },
  {
    LeftComponent: () => (
      <NewsImage
        imageUrl="/news4.jpg"
        headline="Employment in COVID-19: The Impact of Coronavirus in Singapore"
      />
    ),
    RightComponent: () => (
      <NewsContent
        headline="Employment in COVID-19: The Impact of Coronavirus in Singapore"
        introduction="Nearly 20,000 people lost their jobs in the first quarter of 2020 in Singapore as a result of the pandemic. COVID-19 affected employment rates as they dropped to an all-time low, and the situation was even worse than the 2008-2009 global financial crisis. Jobs in Singapore were hard to find, especially for those belonging to a middle to lower class income rate. They were already vulnerable due to the lack of financial resources such as savings and investments, and the pandemic made their scenario a whole lot worse. They had no cushion that could save them from the financial blow losing their jobs was going to bring to their lives."
        author="Pravin Nyanes"
        date="August 1, 2021"
        category="Career counseling"
      />
    ),
  },
]

export default function Industries() {
  const [activeCard, setActiveCard] = useState(0)
  const ref = useRef(null)
  const containerRef = useRef<HTMLUListElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 0.3', 'center start'],
  })

  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.5, 1, 1, 0.5]
  )
  const slideUp = useTransform(scrollYProgress, [0, 0.3, 1], [150, -100, -100])

  const handleCardClick = (index: number): void => {
    setActiveCard(index)
  }

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const container = containerRef.current
    if (!container) return

    const threshold = container.offsetWidth * 0.2
    const dragDistance = info.offset.x
    const dragDirection = dragDistance > 0 ? -1 : 1

    if (Math.abs(dragDistance) > threshold) {
      const newIndex = Math.max(
        0,
        Math.min(cardData.length - 1, activeCard + dragDirection)
      )
      setActiveCard(newIndex)
    }
  }

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center overflow-hidden">
      <motion.h2 className="text-3xl" style={{ translateY: slideUp }}>
        The right expertise for your recruitment needs
      </motion.h2>
      <motion.div
        ref={ref}
        className="my-auto flex h-[88%] w-[93%] flex-col items-center gap-8"
        style={{ scale }}
      >
        <motion.ul
          ref={containerRef}
          className="relative flex h-full w-[80vw] touch-pan-y gap-8"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.1}
          onDragEnd={handleDragEnd}
        >
          {cardData.map((card, index) => (
            <Card
              key={index}
              {...card}
              activeCard={activeCard}
              onClick={() => handleCardClick(index)}
            />
          ))}
        </motion.ul>
        <Slider
          activeCard={activeCard}
          setActiveCard={setActiveCard}
          totalCards={cardData.length}
        />
      </motion.div>
    </div>
  )
}
