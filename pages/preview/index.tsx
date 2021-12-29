import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import Post from '@/components/Post'

const Preview = () => {
  const router = useRouter()
  const [post, changePost] = useState(null)
  const { id, nonce } = router.query

  useEffect(() => {
    if (!id || !nonce) return
    const post_url = 'https://256-anything.site/wp/wp-json/wp/v2/posts/' + id

    axios
      .get(post_url, { headers: { 'X-WP-Nonce': nonce } })
      .then((response) => {
        const article = response.data
        changePost(article)
      })
  }, [id, nonce])

  if (typeof window === 'undefined') return null

  return post ? <Post post={post} /> : null
}

export default Preview
