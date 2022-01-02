import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import ContentSubTitle from '@/components/ContentSubTitle'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Content/ContentSubTitle',
  component: ContentSubTitle,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ContentSubTitle> = (args) => (
  <ContentSubTitle {...args} />
)

export const TemplateContentSubTitle = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TemplateContentSubTitle.args = {
  title: '詳細ページのサブタイトル',
}
