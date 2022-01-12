import React, { useEffect, useState } from 'react'

// type PageNewsNumberType = {
//   prev: string | undefined
//   next: string | undefined
// }

export const usePagenation = ({ pagename, postId, contentList }) => {
  const [PageNumberState, setPageNumberState] = useState({
    prev: undefined,
    next: undefined,
  })

  useEffect(() => {
    for (let i = 0; i <= contentList.length - 1; i++) {
      if (contentList[i].node[`${pagename}ItemId`] === postId) {
        const prevNumber = i - 1
        const nextNumber = i + 1
        setPageNumberState({
          prev:
            contentList[prevNumber] !== undefined
              ? contentList[prevNumber].node[`${pagename}ItemId`]
              : undefined,
          next:
            contentList[nextNumber] !== undefined
              ? contentList[nextNumber].node[`${pagename}ItemId`]
              : undefined,
        })
      }
    }
  }, [])

  return { PageNumberState }
}
