export default function JobTitle({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-between">
      <h3 className="mb-4 text-xl font-semibold">{title}</h3>
    </div>
  )
}
