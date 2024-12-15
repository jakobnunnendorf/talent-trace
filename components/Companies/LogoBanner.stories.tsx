import type { Meta, StoryObj } from '@storybook/react'

import LogoBanner from './LogoBanner'

const meta = {
  component: LogoBanner,
} satisfies Meta<typeof LogoBanner>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
