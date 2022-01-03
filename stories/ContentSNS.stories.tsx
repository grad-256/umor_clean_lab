import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import ContentSNS from '@/components/ContentSNS'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Content/ContentSNS',
  component: ContentSNS,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ContentSNS> = (args) => (
  <ContentSNS {...args} />
)

export const TemplateContentSNS = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TemplateContentSNS.args = {}
