import React from 'react'

type ContentDefinitionType = {
  dt: string
  listtext: string
}

const ContentDefinition: React.FC<ContentDefinitionType> = ({
  dt,
  listtext,
}) => {
  return (
    <dl className={`c_list_contents`}>
      <dt>{dt}</dt>
      <dd>
        <p className="text-base">{listtext}</p>
        <p className="text-base">{listtext}</p>
      </dd>
    </dl>
  )
}

export default ContentDefinition
