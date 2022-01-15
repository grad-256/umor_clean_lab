import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import PageDetail from '@/components/PageDetail'
import client from '@/apollo-client'
import Posts from '@/graphql/posts'

type CONTENTSTYPE = {
  postId: number
  content: {
    title: string
    date: string
    content: string
  }
  contentList: {
    node: {
      skillItemId: number
      title: string
      date: string
    }
  }[]
}

const Content: React.FC<CONTENTSTYPE> = ({ postId, content, contentList }) => {
  return (
    <PageDetail
      pagename="skill"
      postId={postId}
      title="Skill"
      URL="/skill/wp/"
      content={content}
      contentList={contentList}
    />
  )
}

export default Content

export const getStaticPaths: GetStaticPaths = async () => {
  const Fetch = await fetch(`${process.env.NEXT_PUBLIC_API_URL}skill/`)
  const result = await Fetch.json()

  const data: any = await client.query({
    query: Posts.skillItemsAll(result.length),
    fetchPolicy: 'network-only',
  })

  const posts = data.data.skillItems.edges
  const paths = []
  posts.map((item: { node: { skillItemId: number } }) => {
    const row = { params: { id: String(item.node.skillItemId) } }
    paths.push(row)
  })

  return {
    paths: paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postId = Number(params.id)
  const Fetch = await fetch(`${process.env.NEXT_PUBLIC_API_URL}skill/`)
  const result = await Fetch.json()

  const skillItems: any = await client.query({
    query: Posts.skillItemsAll(result.length),
    fetchPolicy: 'network-only',
  })

  const skillContents: any = await client.query({
    query: Posts.skillItem(postId),
    fetchPolicy: 'network-only',
  })

  return {
    props: {
      postId,
      content: skillContents.data.skillItemBy,
      contentList: skillItems.data.skillItems.edges,
    },
  }
}
