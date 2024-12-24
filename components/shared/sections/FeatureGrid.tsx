interface Feature {
  title: string
  description: string
}

interface FeatureGridProps {
  title: string
  subtitle?: string
  features: Feature[]
  columns?: 2 | 3
  bgColor?: 'white' | 'gray'
}

export default function FeatureGrid({
  title,
  subtitle,
  features,
  columns = 2,
  bgColor = 'white',
}: FeatureGridProps) {
  return (
    <section
      className={`px-6 py-12 ${bgColor === 'gray' ? 'bg-gray-100' : ''}`}
    >
      <h2 className="text-center text-3xl font-bold">{title}</h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-3xl text-center text-lg">{subtitle}</p>
      )}
      <div
        className={`${'grid-rows-' + (features.length / columns).toString()} mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 ${columns === 3 ? 'lg:grid-cols-3' : ''}`}
      >
        {features.map((feature, index) => (
          <div key={index} className="h-full rounded bg-white p-6 shadow-lg">
            <h3 className="text-2xl font-bold">{feature.title}</h3>
            <p className="mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
