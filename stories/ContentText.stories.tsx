import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import ContentText from '@/components/ContentText'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Content/ContentText',
  component: ContentText,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ContentText> = (args) => (
  <ContentText {...args} />
)

export const TemplateContentText = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TemplateContentText.args = {
  title: '詳細ページのテキスト',
}
