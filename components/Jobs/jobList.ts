interface Tag {
  text: string
  color: string
}

interface JobProps {
  job_title: string
  location: string
  posted_date: string
  salary_range: string
  job_type: string
  company: string
  tags: Tag[]
  company_logo: string
}

export const jobs: JobProps[] = [
  {
    job_title: 'Chartering Manager',
    location: 'Singapore',
    posted_date: '27/05/2024',
    salary_range: '$80k - $150k',
    job_type: 'Full Time',
    company: 'Oldendorff',
    tags: [{ text: 'Urgent', color: 'red' }],
    company_logo: '/Oldendorff logo.png',
  },
  {
    job_title: 'Operations Executive',
    location: 'Singapore',
    posted_date: '31/01/2024',
    salary_range: '$60k - $120k',
    job_type: 'Full Time',
    company: 'Rio Tinto',
    tags: [],
    company_logo: '/RioTinto logo.png',
  },
  {
    job_title: 'Vessel Operator',
    location: 'Singapore',
    posted_date: '06/09/2023',
    salary_range: '$55k - $100k',
    job_type: 'Full Time',
    company: 'Oldendorff',
    tags: [{ text: 'Private', color: 'green' }],
    company_logo: '/Oldendorff logo.png',
  },
  {
    job_title: 'Freight Research Analyst',
    location: 'Singapore',
    posted_date: '30/03/2023',
    salary_range: '$50k - $90k',
    job_type: 'Full Time',
    company: 'Rio Tinto',
    tags: [],
    company_logo: '/RioTinto logo.png',
  },
  {
    job_title: 'LNG Technical Superintendent',
    location: 'Singapore',
    posted_date: '30/10/2023',
    salary_range: '$80k - $160k',
    job_type: 'Full Time',
    company: 'Rio Tinto',
    tags: [
      { text: 'Urgent', color: 'red' },
      { text: 'Private', color: 'green' },
    ],
    company_logo: '/RioTinto logo.png',
  },
  {
    job_title: 'Post Fixture/Laytime Manager',
    location: 'Singapore',
    posted_date: '20/11/2023',
    salary_range: '$70k - $130k',
    job_type: 'Full Time',
    company: 'Rio Tinto',
    tags: [],
    company_logo: '/RioTinto logo.png',
  },
]
