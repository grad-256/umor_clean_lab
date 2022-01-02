import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import ContentTitle from '@/components/ContentTitle'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Content/ContentTitle',
  component: ContentTitle,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ContentTitle> = (args) => (
  <ContentTitle {...args} />
)

export const TemplateContentTitle = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TemplateContentTitle.args = {
  title: '詳細ページのメインタイトル',
}
