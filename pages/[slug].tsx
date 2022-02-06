import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import client from '@/apollo-client'
import Posts from '@/graphql/posts'
import Layout from '@/components/Layout'

export const PAGES = [
  { url: 'top', title: 'このサイトについて' },
  { url: 'about', title: 'このサイトについて' },
  { url: 'privacy', title: 'プライバシーポリシー' },
  { url: 'profile', title: 'プロフィール' },
]

const PagePost = ({ content }) => {
  return (
    <Layout title={`${content.title} | Hobby Blog`} type="article">
      <div dangerouslySetInnerHTML={{ __html: content.content }} />
    </Layout>
  )
}

export default PagePost

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
      content: pageContents.data.pageBy,
    },
  }
}
