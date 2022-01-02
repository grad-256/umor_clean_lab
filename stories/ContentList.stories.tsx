import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import ContentList from '@/components/ContentList'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Content/ContentList',
  component: ContentList,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ContentList> = (args) => (
  <ContentList {...args} />
)

export const TemplateContentList = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TemplateContentList.args = {
  listtext: 'ページタイトル',
}
