import React from 'react'

type ContentSubTitleType = {
  title: string
}

const ContentSubTitle: React.FC<ContentSubTitleType> = ({ title }) => {
  return (
    <h3 className="relative pl-[1rem] mb-[1rem] text-xl font-bold mt-12 before:bg-[#00aa6e] before:w-[0.3rem] before:absolute before:top-0 before:left-0 before:h-full">
      {title}
    </h3>
  )
}

export default ContentSubTitle
