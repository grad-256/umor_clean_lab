import React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import PagePictures from '@/components/PagePictures'
import client from '@/apollo-client'
import Posts from '@/graphql/posts'
import { ParsedUrlQuery } from 'node:querystring'

type CONTENTSTYPE = {
  postId: number
  pictureListContents: {
    title: string
    content: string
    date: string
  }
  contentList: {
    node: {
      postId: number
      title: string
      date: string
    }
  }[]
}

const Content: React.FC<CONTENTSTYPE> = ({
  postId,
  pictureListContents,
  contentList,
}) => {
  return (
    <PagePictures
      pagename="picture"
      postId={postId}
      title="Picture"
      URL="/pictures/"
      pictureListContents={pictureListContents}
      contentList={contentList}
    />
  )
}

export default Content

type pictureListContentsTYPE = {
  data: {
    postBy: {
      title: string
      content: string
      date: string
    }
  }
}

type pictureListTYPE = {
  data: {
    posts: {
      edges: {
        node: {
          postId: number
          title: string
          date: string
        }
      }
    }
  }
}

interface Params extends ParsedUrlQuery {
  id: string
}

interface Props {
  pictureListContents: pictureListContentsTYPE
  contentList: pictureListTYPE
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const Fetch = await fetch(
    `${process.env.NEXT_PUBLIC_POSTS_API_URL}?_fields=id`
  )
  const result = await Fetch.json()

  const data: any = await client.query({
    query: Posts.getItemsAll(result.length),
    fetchPolicy: 'network-only',
  })

  const posts = data.data.posts.edges
  const paths = []

  posts.map((item: { node: { postId: number } }) => {
    const row = { params: { id: String(item.node.postId) } }
    paths.push(row)
  })

  return {
    paths: paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const postId = params.id
  const Fetch = await fetch(
    `${process.env.NEXT_PUBLIC_POSTS_API_URL}?_fields=id`
  )
  const result = await Fetch.json()

  const contentList: any = await client.query({
    query: Posts.getItemsAll(result.length),
    fetchPolicy: 'network-only',
  })
  const pictureContents: any = await client.query({
    query: Posts.getItem(Number(postId)),
    fetchPolicy: 'network-only',
  })

  return {
    props: {
      postId,
      pictureListContents: pictureContents.data.postBy,
      contentList: contentList.data.posts.edges,
    },
  }
}
