import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface CTAButton {
  text: string
  href?: string
  onClick?: () => void
}

interface CTASectionProps {
  title: string
  description: string
  primaryButton: CTAButton
  secondaryButton?: CTAButton
}

export default function CTASection({
  title,
  description,
  primaryButton,
  secondaryButton,
}: CTASectionProps) {
  return (
    <section className="bg-blue px-6 py-12 text-center text-white">
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="mt-4 text-lg">{description}</p>
      <div className="mt-6 space-x-4">
        <Button
          onClick={primaryButton.onClick}
          className="hover:bg-green-600 rounded bg-green px-6 py-3 font-semibold text-white transition"
        >
          <Link href={primaryButton.href || ''}>{primaryButton.text}</Link>
        </Button>
        {secondaryButton && (
          <Button
            onClick={secondaryButton.onClick}
            className="rounded border-white bg-transparent px-6 py-3 font-bold underline underline-offset-2 transition hover:bg-white hover:text-blue"
          >
            <Link href={secondaryButton.href || ''}>
              {secondaryButton.text}
            </Link>
          </Button>
        )}
      </div>
    </section>
  )
}
