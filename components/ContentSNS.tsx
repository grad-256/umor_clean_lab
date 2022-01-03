import React from 'react'

const ContentSNS: React.FC = () => {
  return (
    <div className={`c_icon_wrap mt-4`}>
      <a
        href="https://github.com/grad-256"
        target="_blank"
        rel="noreferrer"
        className={`c_icon`}
      >
        <img src="https://256-anything.site/icon_github.png" alt="" />
      </a>
      <a
        href="https://twitter.com/masaru_free"
        target="_blank"
        rel="noreferrer"
        className={`c_icon c_icon_twitter ml-3`}
      >
        <img src="https://256-anything.site/icon_twitter.svg" alt="" />
      </a>
    </div>
  )
}

export default ContentSNS
