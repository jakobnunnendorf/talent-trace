'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import MainButton from '@/components/Buttons/MainButton'

import {
  Form,
  FormControl,
  FormDescription,
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
  jobTitle: z.string().min(2, {
    message: 'Job title must be at least 2 characters.',
  }),
  company: z.string().min(2, {
    message: 'Company name must be at least 2 characters.',
  }),
  location: z.string().min(2, {
    message: 'Location must be at least 2 characters.',
  }),
  employmentType: z.enum(['fullTime', 'partTime', 'contract', 'temporary'], {
    required_error: 'Please select an employment type.',
  }),
  industry: z.string().min(2, {
    message: 'Please specify the industry.',
  }),
  salary: z.string().optional(),
  description: z.string().min(50, {
    message: 'Job description must be at least 50 characters.',
  }),
  requirements: z.string().min(50, {
    message: 'Job requirements must be at least 50 characters.',
  }),
  contactEmail: z.string().email({
    message: 'Please enter a valid email address.',
  }),
})

export function PostJobForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      jobTitle: '',
      company: '',
      location: '',
      salary: '',
      description: '',
      requirements: '',
      contactEmail: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    //TODO: add form logic
    return null
  }

  return (
    <div className="mx-auto py-16 md:px-4 lg:w-full lg:max-w-6xl">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 text-gray-600"
        >
          <div className="rounded-lg border border-gray-200 bg-white px-10 pt-16 shadow-sm">
            <div className="text-center">
              <h1 className="text-3xl font-bold">Post a New Job</h1>
              <p className="mt-2 text-gray-600">
                Fill in the details below to post your job listing
              </p>
            </div>
            <div className="gap-y-8 py-10 lg:grid lg:grid-cols-2 lg:gap-x-28">
              {/* Basic Information Section */}
              <div className="col-span-2 lg:order-1">
                <h2 className="mb-4 text-xl font-semibold">
                  Basic Information
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="jobTitle"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Job Title</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g., Senior Software Engineer"
                            {...field}
                          />
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
                </div>
              </div>

              {/* Job Details Section */}
              <div className="lg:order-3">
                <h2 className="mb-4 text-xl font-semibold">Job Details</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Location</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Singapore" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="employmentType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Employment Type</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select employment type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="fullTime">Full Time</SelectItem>
                            <SelectItem value="partTime">Part Time</SelectItem>
                            <SelectItem value="contract">Contract</SelectItem>
                            <SelectItem value="temporary">Temporary</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="industry"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Industry</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Maritime" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="salary"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Salary Range (Optional)</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g., $80,000 - $100,000"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Description Section */}
              <div className="h-full w-full self-start lg:order-2 lg:row-span-3">
                <h2 className="mb-8 text-xl font-semibold">Job Description</h2>
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Describe the role</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Describe the role and responsibilities"
                            className="min-h-[150px]"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Include key responsibilities, day-to-day activities,
                          and team structure
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="requirements"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Requirements</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="List the required qualifications and experience"
                            className="min-h-[150px]"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          List required skills, experience, and qualifications
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Contact Section */}
              <div className="lg:order-4">
                <h2 className="mb-4 text-xl font-semibold">
                  Contact Information
                </h2>
                <FormField
                  control={form.control}
                  name="contactEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="contact@company.com"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        This email will receive job applications
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <MainButton
              buttonText="Post Job"
              className="mx-auto mb-8 mt-4 block w-64"
            />
          </div>
        </form>
      </Form>
    </div>
  )
}
