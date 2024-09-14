export interface Tag {
  text: string
  color: string
}

export interface JobProps {
  job_title: string
  location: string
  posted_date: string
  salary_range: string
  job_type: string
  company: string
  tags: Tag[]
  company_logo: string
}
