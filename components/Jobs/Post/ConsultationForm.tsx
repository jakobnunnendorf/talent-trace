'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import MainButton from '@/components/shared/Buttons/MainButton'
import emailjs from '@emailjs/browser'
import { useState } from 'react'
import { toast } from 'sonner'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  company: z.string().min(2, {
    message: 'Company name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  phone: z.string().min(8, {
    message: 'Please enter a valid phone number.',
  }),
  service_type: z.enum(
    ['postJob', 'contingentSearch', 'executiveSearch', 'consultancy', 'other'],
    {
      required_error: 'Please select a service type.',
    }
  ),
  message: z.string().optional(),
})

export function ConsultationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      company: '',
      email: '',
      phone: '',
      service_type: 'postJob',
      message: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      const templateParams = {
        fullName: values.name,
        company: values.company,
        email: values.email,
        phone: values.phone,
        service_type: values.service_type,
        message: values.message || 'No additional message',
      }

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )

      toast.success('Consultation request submitted successfully!')
      form.reset()
    } catch (error) {
      console.error('Error submitting form:', error)
      toast.error('Failed to submit request. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="mx-auto md:px-4 md:py-16 lg:w-full lg:max-w-6xl">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 text-gray-600"
        >
          <div className="rounded-lg border border-gray-200 bg-white px-10 pt-16 shadow-sm">
            <div className="text-center">
              <h1 className="text-3xl font-bold">Request a Consultation</h1>
              <p className="mt-2 text-gray-600">
                Fill in your details below and we&apos;ll get back to you
                shortly
              </p>
            </div>

            <div className="space-y-8 py-10">
              {/* Contact Information */}
              <div className="grid gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your company name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="+65 XXXX XXXX" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Service Type */}
              <div>
                <FormField
                  control={form.control}
                  name="service_type"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>What would you like to discuss?</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="postJob">Post a Job</SelectItem>
                          <SelectItem value="contingentSearch">
                            Contingent Search
                          </SelectItem>
                          <SelectItem value="executiveSearch">
                            Executive Search
                          </SelectItem>
                          <SelectItem value="consultancy">
                            Consultancy
                          </SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Additional Message */}
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Additional Information (Optional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us more about what you'd like to discuss..."
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <MainButton
              buttonText="Request Consultation"
              className="mx-auto mb-8 mt-4 block w-64"
              disabled={isSubmitting}
              type="submit"
            />
          </div>
        </form>
      </Form>
    </div>
  )
}
