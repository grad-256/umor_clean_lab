import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import client from '@/apollo-client'
import Posts from '@/graphql/posts'
import PageDiary from '@/components/PageDiary'

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
  return <PageDiary content={content} contentList={contentList} />
}

export default Content

export const getStaticPaths: GetStaticPaths = async () => {
  const data: any = await client.query({
    query: Posts.diaryItems(),
    fetchPolicy: 'network-only',
  })

  const posts = data.data.diaryItems.edges
  const paths = []
  posts.map((item: { node: { diaryItemId: number } }) => {
    const row = { params: { id: String(item.node.diaryItemId) } }
    paths.push(row)
  })

  return {
    paths: paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postId = Number(params.id)

  const diaryItems: any = await client.query({
    query: Posts.diaryItems(),
    fetchPolicy: 'network-only',
  })

  const diaryContents: any = await client.query({
    query: Posts.diaryItem(postId),
    fetchPolicy: 'network-only',
  })

  return {
    props: {
      content: diaryContents.data.diaryItemBy,
      contentList: diaryItems.data.diaryItems.edges,
    },
  }
}
