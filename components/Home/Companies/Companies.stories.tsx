import type { Meta, StoryObj } from '@storybook/react'

import Companies from './Companies'

const meta = {
  component: Companies,
} satisfies Meta<typeof Companies>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
