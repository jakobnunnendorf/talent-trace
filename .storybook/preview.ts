import type { Preview } from '@storybook/react'
import '@/components/FeaturedJobs/FeaturedJobs.css'
import '@/app/globals.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
