import React from 'react'

type ContentLinkType = {
  text: string
}

const ContentLink: React.FC<ContentLinkType> = ({ text }) => {
  return (
    <a
      href="https://www.wantedly.com/users/18326371/post_articles/279639"
      target="_blank"
      rel="noopener noreferrer"
      className="text-base underline"
    >
      {text}
    </a>
  )
}

export default ContentLink
