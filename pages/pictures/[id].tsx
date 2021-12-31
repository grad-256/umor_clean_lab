import React, { Fragment, useState, useEffect } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import PagePictures from '@/components/PagePictures'
import client from '@/apollo-client'
import Posts from '@/graphql/posts'
import { ParsedUrlQuery } from 'node:querystring'

type CONTENTSTYPE = {
  pictureListContents: {
    title: string
    content: string
    date: string
  }
  pictureList: {
    node: {
      postId: number
      title: string
      date: string
    }
  }[]
}

const Content: React.FC<CONTENTSTYPE> = ({
  pictureListContents,
  pictureList,
}) => {
  return (
    <PagePictures
      pictureListContents={pictureListContents}
      pictureList={pictureList}
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
  pictureList: pictureListTYPE
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const data: any = await client.query({
    query: Posts.getItems(),
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

  const pictureList: any = await client.query({
    query: Posts.getItems(),
    fetchPolicy: 'network-only',
  })
  const pictureContents: any = await client.query({
    query: Posts.getItem(Number(postId)),
    fetchPolicy: 'network-only',
  })

  return {
    props: {
      pictureListContents: pictureContents.data.postBy,
      pictureList: pictureList.data.posts.edges,
    },
  }
}
