import React from 'react'

type ContentTitleType = {
  title: string
}

const ContentTitle: React.FC<ContentTitleType> = ({ title }) => {
  return (
    <div className="flex flex-col-reverse border-b-[2px] border-solid border-color-[#00aa6e] text-center pb-6">
      <h2 className="text-3xl font-bold">{title}</h2>
    </div>
  )
}

export default ContentTitle
