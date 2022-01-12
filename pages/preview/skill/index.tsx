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
      const skillItems: any = await client.query({
        query: Posts.skillItems(),
        fetchPolicy: 'network-only',
      })

      const skillContents: any = await client.query({
        query: Posts.skillItem(Number(id)),
        fetchPolicy: 'network-only',
      })

      changePost([skillContents, skillItems])
    }
    f()
  }, [id, nonce])

  if (typeof window === 'undefined') return null

  return post ? (
    <PageDetail
      pagename="skill"
      postId={id}
      title="preview"
      URL="/skill/wp/"
      content={post[0].data.skillItemBy}
      contentList={post[1].data.skillItems.edges}
    />
  ) : null
}

export default Preview
