interface Testimonial {
  quote: string
  author: string
  title: string
  company: string
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
  bgColor?: 'white' | 'gray'
}

export default function TestimonialsSection({
  testimonials,
  bgColor = 'white',
}: TestimonialsSectionProps) {
  return (
    <section
      className={`px-6 py-12 ${bgColor === 'gray' ? 'bg-gray-100' : ''}`}
    >
      <h2 className="text-center text-3xl font-bold">Success Stories</h2>
      {testimonials.map((testimonial, index) => (
        <div key={index}>
          <blockquote className="mx-auto mt-6 max-w-3xl text-center text-lg italic">
            &quot;{testimonial.quote}&quot;
          </blockquote>
          <p className="mt-4 text-center font-bold">
            – {testimonial.author}, {testimonial.title}, {testimonial.company}
          </p>
        </div>
      ))}
    </section>
  )
}
