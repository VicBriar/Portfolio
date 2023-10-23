import type { Meta, StoryObj } from '@storybook/react'

import BioPage from './BioPage'

const meta: Meta<typeof BioPage> = {
  component: BioPage,
}

export default meta

type Story = StoryObj<typeof BioPage>

export const Primary: Story = {}
