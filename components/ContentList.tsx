import React from 'react'

type ContentListType = {
  listtext: string
}

const ContentList: React.FC<ContentListType> = ({ listtext }) => {
  return (
    <ul className={`c_column_purpose_list`}>
      <li>{listtext}</li>
    </ul>
  )
}

export default ContentList
