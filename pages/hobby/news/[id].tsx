import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import client from '@/apollo-client'
import Posts from '@/graphql/posts'
import PageDetail from '@/components/PageDetail'

type CONTENTSTYPE = {
  postId: number
  content: {
    title: string
    date: string
    content: string
  }
  contentList: {
    node: {
      id: number
      title: string
      date: string
    }
  }[]
}

const Content: React.FC<CONTENTSTYPE> = ({ postId, content, contentList }) => {
  return (
    <PageDetail
      pagename="news"
      postId={postId}
      title="News"
      URL="/hobby/news/"
      content={content}
      contentList={contentList}
    />
  )
}

export default Content

export const getStaticPaths: GetStaticPaths = async () => {
  const Fetch = await fetch(`${process.env.NEXT_PUBLIC_API_URL}news/`)
  const result = await Fetch.json()

  const data: any = await client.query({
    query: Posts.newsItemsAll(result.length),
    fetchPolicy: 'network-only',
  })

  const posts = data.data.newsItems.edges
  const paths = []
  posts.map((item: { node: { newsItemId: number } }) => {
    const row = { params: { id: String(item.node.newsItemId) } }
    paths.push(row)
  })

  return {
    paths: paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postId = Number(params.id)
  const Fetch = await fetch(`${process.env.NEXT_PUBLIC_API_URL}news/`)
  const result = await Fetch.json()

  const newsItems: any = await client.query({
    query: Posts.newsItemsAll(result.length),
    fetchPolicy: 'network-only',
  })

  const newsContents: any = await client.query({
    query: Posts.newsItem(postId),
    fetchPolicy: 'network-only',
  })

  return {
    props: {
      postId,
      content: newsContents.data.newsItemBy,
      contentList: newsItems.data.newsItems.edges,
    },
  }
}
