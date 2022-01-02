import React from 'react'

type ContentMainTitleType = {
  title: string
  imgname: string
}

const ContentMainTitle: React.FC<ContentMainTitleType> = ({
  title,
  imgname,
}) => {
  return (
    <section className="flex justify-center items-center flex-wrap mb-10 maxonlylg:block">
      <h1 className="text-4xl font-bold text-center">- {title} -</h1>
      <div className="w-[200px] ml-[2rem] maxonlylg:w-[50%] maxonlylg:mt-[2rem] maxonlylg:mx-auto">
        <img
          src={`https://256-anything.site/${imgname}.svg`}
          alt={`${imgname}`}
          className="w-full"
        />
      </div>
    </section>
  )
}

export default ContentMainTitle
