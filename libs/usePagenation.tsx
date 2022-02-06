import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
type PageNewsNumberType = {
  prev: string | undefined
  next: string | undefined
}

export const usePagenation = ({ pagename, postId, URL, contentList }) => {
  const router = useRouter()
  const [PageNumberState, setPageNumberState] = useState<PageNewsNumberType>({
    prev: undefined,
    next: undefined,
  })

  const PageNation = () => {
    for (let i = 0; i <= contentList.length - 1; i++) {
      if (
        contentList[i].node[
          `${pagename === 'picture' ? 'postId' : `${pagename}ItemId`}`
        ] === Number(postId)
      ) {
        const prevNumber = i + 1
        const nextNumber = i - 1

        setPageNumberState({
          prev:
            contentList[prevNumber] !== undefined
              ? contentList[prevNumber].node[
                  `${pagename === 'picture' ? 'postId' : `${pagename}ItemId`}`
                ]
              : undefined,
          next:
            contentList[nextNumber] !== undefined
              ? contentList[nextNumber].node[
                  `${pagename === 'picture' ? 'postId' : `${pagename}ItemId`}`
                ]
              : undefined,
        })
      }
    }
  }

  const PageNationComponent = () => {
    return (
      <div className="flex justify-between mt-10">
        {PageNumberState.prev !== undefined && (
          <Link href={`${URL}${PageNumberState.prev}`}>
            <a className="mr-auto ml-0 text-lg base_button w-[5rem]">
              <div className="flex items-center justify-center">
                <span>PREV</span>
              </div>
            </a>
          </Link>
        )}
        {PageNumberState.next !== undefined && (
          <Link href={`${URL}${PageNumberState.next}`}>
            <a className="mr-0 ml-auto text-lg base_button w-[5rem]">
              <div className="flex items-center justify-center">
                <span>NEXT</span>
              </div>
            </a>
          </Link>
        )}
      </div>
    )
  }

  useEffect(() => {
    PageNation()
  }, [router])

  return { PageNumberState, PageNationComponent }
}
