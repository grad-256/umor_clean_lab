import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import ContentProfileImage from '@/components/ContentProfileImage'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Content/ContentProfileImage',
  component: ContentProfileImage,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ContentProfileImage> = (args) => (
  <ContentProfileImage {...args} />
)

export const TemplateContentProfileImage = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TemplateContentProfileImage.args = {}
