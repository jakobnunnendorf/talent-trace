interface Step {
  title: string
  description: string
}

interface ProcessStepsProps {
  title: string
  subtitle?: string
  steps: Step[]
  bgColor?: 'white' | 'gray'
}

export default function ProcessSteps({
  title,
  subtitle,
  steps,
  bgColor = 'white',
}: ProcessStepsProps) {
  return (
    <section
      className={`px-6 py-12 ${bgColor === 'gray' ? 'bg-gray-100' : ''}`}
    >
      <h2 className="text-center text-3xl font-bold">{title}</h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-3xl text-center text-lg">{subtitle}</p>
      )}
      <ol className="mx-auto mt-8 max-w-3xl space-y-6 text-lg">
        {steps.map((step, index) => (
          <li key={index}>
            {`${index + 1}. ${step.title}`} {step.description}
          </li>
        ))}
      </ol>
    </section>
  )
}
