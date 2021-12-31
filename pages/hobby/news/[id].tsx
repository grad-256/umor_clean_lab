import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import client from '@/apollo-client'
import Posts from '@/graphql/posts'
import PageNews from '@/components/PageNews'

type CONTENTSTYPE = {
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

const Content: React.FC<CONTENTSTYPE> = ({ content, contentList }) => {
  return <PageNews content={content} contentList={contentList} />
}

export default Content

export const getStaticPaths: GetStaticPaths = async () => {
  const data: any = await client.query({
    query: Posts.newsItems(),
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

  const newsItems: any = await client.query({
    query: Posts.newsItems(),
    fetchPolicy: 'network-only',
  })

  const newsContents: any = await client.query({
    query: Posts.newsItem(postId),
    fetchPolicy: 'network-only',
  })

  return {
    props: {
      content: newsContents.data.newsItemBy,
      contentList: newsItems.data.newsItems.edges,
    },
  }
}
