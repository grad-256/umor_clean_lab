import React, { useEffect, useState } from 'react'

const useContentsMore = (contentList) => {
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

  const handleMoreBottom = () => {
    setContentShowState(ContentShowState * 2)
  }

  return { handleMoreBottom, ContentListState, MoreButtonState }
}

export default useContentsMore
