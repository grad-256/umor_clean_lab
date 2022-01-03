import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import ContentLink from '@/components/ContentLink'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Content/ContentLink',
  component: ContentLink,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ContentLink> = (args) => (
  <ContentLink {...args} />
)

export const TemplateContentLink = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TemplateContentLink.args = {
  text: '社会貢献したいと思うようになった理由',
}
