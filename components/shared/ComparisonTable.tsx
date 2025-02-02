import React from 'react'

interface ComparisonTableProps {
  title: string
  headers: string[]
  rows: string[][]
}

export default function ComparisonTable({
  title,
  headers,
  rows,
}: ComparisonTableProps) {
  return (
    <section className="bg-white px-6 py-12">
      <h2 className="mb-8 text-center text-3xl font-bold">{title}</h2>
      <div className="mx-auto max-w-4xl overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th
                  key={header}
                  className={`border bg-gray-100 p-4 text-left font-bold ${
                    index === 0 ? 'w-1/3' : 'w-1/3'
                  }`}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-b hover:bg-gray-50">
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={`p-4 ${cellIndex === 0 ? 'font-semibold' : ''}`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
