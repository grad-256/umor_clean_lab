import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import PostSkill from '@/components/PostSkill'
import client from '@/apollo-client'
import Posts from '@/graphql/posts'
import axios from 'axios'

const Preview = () => {
  const router = useRouter()
  const [post, changePost] = useState(null)
  const { id, nonce } = router.query

  // ?_embed&status=draft
  useEffect(() => {
    if (!id || !nonce) return
    const f = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}skill?_embed&status=draft`,
        {
          headers: {
            // @ts-ignore
            'X-WP-Nonce': nonce,
          },
        }
      )
      const json = await res.json()
      console.log({ json })

      const pictureContents: any = await client.query({
        query: Posts.skillItem(Number(id)),
        fetchPolicy: 'network-only',
      })

      changePost(pictureContents)
    }
    f()
  }, [id, nonce])

  if (typeof window === 'undefined') return null

  return post ? <PostSkill post={post} /> : null
}

export default Preview
