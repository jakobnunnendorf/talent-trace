import JobIcon from './JobIcon'

export default function JobDetails({
  company,
  location,
  posted_date,
  salary_range,
}: {
  company: string
  location: string
  posted_date: string
  salary_range: string
}) {
  const jobIcons = [
    { src: '/briefcase.png', alt: 'Briefcase icon', text: company },
    { src: '/location pin.png', alt: 'Location pin icon', text: location },
    { src: '/clock.png', alt: 'Clock icon', text: posted_date },
    { src: '/money.png', alt: 'Money icon', text: salary_range },
  ]

  return (
    <ul className="grid grid-cols-4 gap-y-6">
      {jobIcons.map((icon, index) => (
        <li key={index}>
          <JobIcon {...icon} />
        </li>
      ))}
    </ul>
  )
}
