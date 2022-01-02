import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import ContentMainTitle from '@/components/ContentMainTitle'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Content/ContentMainTitle',
  component: ContentMainTitle,
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ContentMainTitle> = (args) => (
  <ContentMainTitle {...args} />
)

export const TemplateContentMainTitle = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TemplateContentMainTitle.args = {
  title: 'ページタイトル',
  imgname: 'about',
}
