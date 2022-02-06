import React, { useEffect, useState } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import client from '@/apollo-client'
import Posts from '@/graphql/posts'
import Layout from '@/components/Layout'

export const PAGES = [
  { url: 'top', title: 'TOP' },
  { url: 'about', title: 'このサイトについて' },
  { url: 'privacy', title: 'プライバシーポリシー' },
  { url: 'profile', title: 'プロフィール' },
]

const Preview = ({ posturi }) => {
  const router = useRouter()
  const [post, changePost] = useState(null)
  const { id, nonce, slug } = router.query

  // ?_embed&status=draft
  useEffect(() => {
    if (!id || !nonce || !slug) return

    const f = async () => {
      const Contents: any = await client.query({
        query: Posts.pageBy(`${posturi}`),
        fetchPolicy: 'network-only',
      })

      changePost(Contents.data.pageBy)
    }
    f()
  }, [id, nonce, slug])

  if (typeof window === 'undefined') return null

  return post ? (
    <Layout title={`${post.title} | Hobby Blog`} type="article">
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </Layout>
  ) : null
}

export default Preview

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: PAGES.map((page) => `/${page.url}`) || [],
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posturi = String(params.slug)

  const pageContents: any = await client.query({
    query: Posts.pageBy(posturi),
    fetchPolicy: 'network-only',
  })

  return {
    props: {
      posturi,
      content: pageContents.data.pageBy,
    },
  }
}
