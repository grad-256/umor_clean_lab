import React, { useEffect, useState } from 'react'

const useContentsMore = (contentList: string | any[]) => {
  const [ContentShowState, setContentShowState] = useState(5)
  const [ContentListState, setContentListState] = useState([])
  const [MoreButtonState, setMoreButtonState] = useState<boolean>(false)

  useEffect(() => {
    if (contentList === undefined) return

    if (contentList.length >= ContentShowState) {
      setMoreButtonState(false)
    } else {
      setMoreButtonState(true)
    }
    // eslint-disable-next-line prefer-const
    let contentListFilter = []
    for (let i = 0; i <= ContentShowState - 1; i++) {
      if (contentList[i] !== undefined) {
        contentListFilter.push(contentList[i])
      }
    }
    setContentListState(contentListFilter)
  }, [contentList, ContentShowState])

  const MoreButton = () => {
    return (
      <>
        {!MoreButtonState ? (
          <button
            onClick={() => handleMoreBottom()}
            type="button"
            disabled={MoreButtonState}
            className="mt-10 text-base rounded-full text-[#35478C] border-2 border-primary border-solid text-center block font-bold maxtb:text-sm py-2 px-4 w-full"
          >
            もっと見る
          </button>
        ) : (
          ''
        )}
      </>
    )
  }

  const handleMoreBottom = () => {
    setContentShowState(ContentShowState + 5)
  }

  return { handleMoreBottom, ContentListState, MoreButtonState, MoreButton }
}

export default useContentsMore
