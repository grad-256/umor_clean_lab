import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import PostDiary from '@/components/PostDiary'
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
        `${process.env.NEXT_PUBLIC_API_URL}diary/${id}/?_embed&status=draft`,
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
        query: Posts.diaryItem(Number(id)),
        fetchPolicy: 'network-only',
      })

      changePost(pictureContents)
    }
    f()
  }, [id, nonce])

  if (typeof window === 'undefined') return null

  return post ? <PostDiary post={post} /> : null
}

export default Preview
