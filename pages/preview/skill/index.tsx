import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import PostSkill from '@/components/PostSkill'
import client from '@/apollo-client'
import Posts from '@/graphql/posts'
import axios from 'axios'
import PageSkill from '@/components/PageSkill'

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

      const pictureContents: any = await client.query({
        query: Posts.skillItem(Number(id)),
        fetchPolicy: 'network-only',
      })

      changePost([pictureContents, skillItems])
    }
    f()
  }, [id, nonce])

  if (typeof window === 'undefined') return null

  return post ? (
    <PageSkill
      content={post[0].data.skillItemBy}
      contentList={post[1].data.skillItems.edges}
    />
  ) : null
}

export default Preview
