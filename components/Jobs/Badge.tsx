const Badge = ({ text, color }: { text: string; color: string }) => {
  const colorClasses = {
    red: 'bg-red-100 text-red-400',
    blue: 'bg-blue-100 text-blue-400',
    green: 'bg-[#65B72F]/20 text-[#65B72F]',
    yellow: 'bg-yellow-100 text-yellow-400',
  }

  return (
    <div
      className={`w-fit rounded-full px-4 py-1 text-sm font-medium ${colorClasses[color as keyof typeof colorClasses] || 'bg-gray-100 text-gray-800'}`}
    >
      <p>{text}</p>
    </div>
  )
}

export default Badge
