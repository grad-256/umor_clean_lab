import React from 'react'
import { Story, Meta } from '@storybook/react'

import ShareButton from './shareButton'

export default {
  title: 'ShareButton',
  component: ShareButton,
} as Meta

const Template: Story = () => <ShareButton />

export const Default = Template.bind({})
