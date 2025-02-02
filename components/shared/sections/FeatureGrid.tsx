import { Card, CardContent, CardHeader } from '@/components/ui/card'

interface Feature {
  title: string
  description: string
  bullets?: string[]
}

interface FeatureGridProps {
  title: string
  subtitle?: string
  features: Feature[]
  summary?: string
  columns?: 2 | 3
  bgColor?: 'white' | 'gray'
}

export default function FeatureGrid({
  title,
  subtitle,
  features,
  summary,
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
        className={`${'grid-rows-' + Math.round(features.length / columns).toString()} mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 ${columns === 3 ? 'lg:grid-cols-3' : ''}`}
      >
        {features.map((feature, index) => (
          <Card key={index} className="rounded-lg bg-white shadow-lg">
            <CardHeader>
              <h3 className="text-2xl font-bold">{feature.title}</h3>
            </CardHeader>
            <CardContent>
              <p className="mt-2">{feature.description}</p>
              {feature.bullets && (
                <ul className="mt-4 list-disc pl-5">
                  {feature.bullets?.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
      {summary && (
        <p className="mx-auto mt-16 max-w-3xl text-center text-lg">{summary}</p>
      )}
    </section>
  )
}
