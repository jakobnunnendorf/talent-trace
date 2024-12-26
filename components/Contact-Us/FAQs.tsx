import React from 'react'
import { fetchFAQs } from '@/lib/notion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default async function FAQs() {
  const faqs = await fetchFAQs()

  return (
    <div className="mt-12">
      <h2 className="mb-6 text-2xl font-bold">
        Quick Answers to Common Questions
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={faq.question} value={`item-${index}`}>
            <AccordionTrigger className="text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
