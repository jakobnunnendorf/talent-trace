import React from 'react'

export default function Calendar() {
  return (
    <div className="ml-auto mr-4 w-96 rounded-3xl bg-white p-6 drop-shadow-2xl">
      <div className="overflow-hidden rounded-lg">
        <div className="py-2 text-center opacity-40">
          <h4 className="text-xl font-semibold text-[#828282]">June 2023</h4>
        </div>
        <table className="w-full">
          <thead>
            <tr className="border-t">
              <th className="px-1 py-2 text-xs">Su</th>
              <th className="px-1 py-2 text-xs">Mo</th>
              <th className="px-1 py-2 text-xs">Tu</th>
              <th className="px-1 py-2 text-xs">We</th>
              <th className="px-1 py-2 text-xs">Th</th>
              <th className="px-1 py-2 text-xs">Fr</th>
              <th className="px-1 py-2 text-xs">Sa</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(5)].map((_, weekIndex) => (
              <tr key={weekIndex}>
                {[...Array(7)].map((_, dayIndex) => (
                  <td key={dayIndex} className="px-1 py-2 text-center text-sm">
                    {((weekIndex * 7 + dayIndex) % 31) + 1}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
