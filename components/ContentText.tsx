import React from 'react'

type ContentTextType = {
  title: string
}

const ContentText: React.FC<ContentTextType> = ({ title }) => {
  return <p className="text-base mt-7 leading-7">{title}</p>
}

export default ContentText
