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
      const newsItems: any = await client.query({
        query: Posts.newsItems(),
        fetchPolicy: 'network-only',
      })

      const newsContents: any = await client.query({
        query: Posts.newsItem(Number(id)),
        fetchPolicy: 'network-only',
      })

      changePost([newsContents, newsItems])
    }
    f()
  }, [id, nonce])

  if (typeof window === 'undefined') return null

  return post ? (
    <PageDetail
      title="preview"
      URL="/hobby/news/"
      content={post[0].data.newsItemBy}
      contentList={post[1].data.newsItems.edges}
    />
  ) : null
}

export default Preview
