// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import HomeLinks from './HomeLinks'

const meta: Meta<typeof HomeLinks> = {
  component: HomeLinks,
}

export default meta

type Story = StoryObj<typeof HomeLinks>

export const Primary: Story = {}
