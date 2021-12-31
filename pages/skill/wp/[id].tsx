import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import PageSkill from '@/components/PageSkill'
import client from '@/apollo-client'
import Posts from '@/graphql/posts'

type CONTENTSTYPE = {
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

const Content: React.FC<CONTENTSTYPE> = ({ content, contentList }) => {
  return <PageSkill content={content} contentList={contentList} />
}

export default Content

export const getStaticPaths: GetStaticPaths = async () => {
  const data: any = await client.query({
    query: Posts.skillItems(),
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

  const skillItems: any = await client.query({
    query: Posts.skillItems(),
    fetchPolicy: 'network-only',
  })

  const skillContents: any = await client.query({
    query: Posts.skillItem(postId),
    fetchPolicy: 'network-only',
  })

  return {
    props: {
      content: skillContents.data.skillItemBy,
      contentList: skillItems.data.skillItems.edges,
    },
  }
}
