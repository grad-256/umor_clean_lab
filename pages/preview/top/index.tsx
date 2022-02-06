import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import client from '@/apollo-client'
import Posts from '@/graphql/posts'
import Layout from '@/components/Layout'

const Preview = () => {
  const router = useRouter()
  const [post, changePost] = useState(null)
  const { id, nonce } = router.query

  // ?_embed&status=draft
  useEffect(() => {
    if (!id || !nonce) return
    const f = async () => {
      const Contents: any = await client.query({
        query: Posts.pageBy('top'),
        fetchPolicy: 'network-only',
      })

      changePost(Contents.data.pageBy)
    }
    f()
  }, [id, nonce])

  if (typeof window === 'undefined') return null

  return post ? (
    <Layout title={`${post.title} | Hobby Blog`} type="article">
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </Layout>
  ) : null
}

export default Preview
