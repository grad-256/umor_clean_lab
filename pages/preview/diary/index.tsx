import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import client from '@/apollo-client'
import Posts from '@/graphql/posts'
import PageDetail from '@/components/PageDetail'

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
    <PageDetail
      pagename="diary"
      postId={id}
      title="preview"
      URL="/hobby/diary/"
      content={post[0].data.diaryItemBy}
      contentList={post[1].data.diaryItems.edges}
    />
  ) : null
}

export default Preview
