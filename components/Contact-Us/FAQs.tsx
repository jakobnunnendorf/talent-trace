import React from 'react'

interface FAQItem {
  question: string
  answer: string
}
const frequentlyAskedQuestions: FAQItem[] = [
  {
    question: 'How long does it take to hear back?',
    answer: 'We aim to respond to all inquiries within 24-48 hours.',
  },
  {
    question: 'Can I submit my resume through this form?',
    answer:
      'Yes! You can attach your resume directly when sending us a message.',
  },
  {
    question: 'Where can I find updates on career opportunities?',
    answer: 'Follow our LinkedIn page for the latest job openings and updates.',
  },
]

/* TODO: stream FAQ Section from notion */

export default function FAQs() {
  return (
    <div className="mt-12">
      <h2 className="mb-6 text-2xl font-bold">
        Quick Answers to Common Questions
      </h2>
      <div className="space-y-6">
        {frequentlyAskedQuestions.map((question) => {
          return (
            <div key={question.question}>
              <h3 className="font-semibold">{question.question}</h3>
              <p className="mt-1 text-gray-600">{question.answer}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
