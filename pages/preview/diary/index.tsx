import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import PageDiary from '@/components/PageDiary'
import client from '@/apollo-client'
import Posts from '@/graphql/posts'

const Preview = () => {
  const router = useRouter()
  const [post, changePost] = useState(null)
  const { id, nonce } = router.query

  // ?_embed&status=draft
  useEffect(() => {
    if (!id || !nonce) return
    const f = async () => {
      const diaryItems: any = await client.query({
        query: Posts.diaryItems(),
        fetchPolicy: 'network-only',
      })

      const diaryContents: any = await client.query({
        query: Posts.diaryItem(Number(id)),
        fetchPolicy: 'network-only',
      })

      changePost([diaryContents, diaryItems])
    }
    f()
  }, [id, nonce])

  if (typeof window === 'undefined') return null

  return post ? (
    <PageDiary
      content={post[0].data.skillItemBy}
      contentList={post[1].data.skillItems.edges}
    />
  ) : null
}

export default Preview
