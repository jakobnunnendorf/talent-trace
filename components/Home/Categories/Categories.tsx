import React from 'react'
import CategoryIcon from './CategoryIcon'
import { fetchCategories } from '@/lib/notion'

export default async function Categories() {
  const categoryObjects = await fetchCategories()
  return (
    <section id="job-categories" className="py-12 md:p-24">
      <h2 className="p-6 pb-12 text-center text-4xl">
        Find jobs in your industry
      </h2>
      <ul className="mx-auto grid w-fit grid-cols-2 grid-rows-4 px-4 md:grid-cols-3 md:gap-x-32 md:gap-y-4">
        {categoryObjects.reverse().map((category, index) => (
          <CategoryIcon
            key={index}
            icon={category.icon}
            categoryName={category.categoryName}
            href={`/categories/${category.id}`}
          />
        ))}
      </ul>
    </section>
  )
}
