import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import PostNews from '@/components/PostNews'
import client from '@/apollo-client'
import Posts from '@/graphql/posts'
import PageNews from '@/components/PageNews'

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
    <PageNews
      content={post[0].data.newsItemBy}
      contentList={post[1].data.newsItems.edges}
    />
  ) : null
}

export default Preview
