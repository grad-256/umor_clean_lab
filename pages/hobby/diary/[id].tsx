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
      pagename="diary"
      postId={postId}
      title="Diary"
      URL="/hobby/diary/"
      content={content}
      contentList={contentList}
    />
  )
}

export default Content

export const getStaticPaths: GetStaticPaths = async () => {
  const Fetch = await fetch(`${process.env.NEXT_PUBLIC_API_URL}diary/`)
  const result = await Fetch.json()

  const data: any = await client.query({
    query: Posts.diaryItemsAll(result.length),
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
  const Fetch = await fetch(`${process.env.NEXT_PUBLIC_API_URL}diary/`)
  const result = await Fetch.json()

  const diaryItems: any = await client.query({
    query: Posts.diaryItemsAll(result.length),
    fetchPolicy: 'network-only',
  })

  const diaryContents: any = await client.query({
    query: Posts.diaryItem(postId),
    fetchPolicy: 'network-only',
  })

  return {
    props: {
      postId,
      content: diaryContents.data.diaryItemBy,
      contentList: diaryItems.data.diaryItems.edges,
    },
  }
}
