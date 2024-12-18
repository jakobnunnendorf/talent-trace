import type { Meta, StoryObj } from '@storybook/react'

import Logo from './Logo'

const meta = {
  component: Logo,
} satisfies Meta<typeof Logo>

export default meta

type Story = StoryObj<typeof meta>

export const ScrollingUp: Story = {
  args: {
    scrollDirection: 'up',
  },
}

export const ScrollingDown: Story = {
  args: {
    scrollDirection: 'down',
  },
}
