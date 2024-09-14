import Badge from './Badge'

export default function JobTags({
  job_type,
  tags,
}: {
  job_type: string
  tags: { text: string; color: string }[]
}) {
  return (
    <ul className="mt-4 flex flex-wrap gap-4">
      <li>
        <Badge text={job_type} color="blue" />
      </li>
      {tags?.map((tag, index) => (
        <li key={index}>
          <Badge text={tag.text} color={tag.color} />
        </li>
      ))}
    </ul>
  )
}
