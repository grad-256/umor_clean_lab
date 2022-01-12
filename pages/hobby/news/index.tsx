import React, { Fragment } from 'react'
import { GetStaticProps } from 'next'
import Detail from '@/components/Detail'
import client from '@/apollo-client'
import Posts from '@/graphql/posts'

type CONTENTSTYPE = {
  newsContents: {
    node: {
      newsItemId: number
      title: string
      date: string
    }
  }[]
}

const Hobby: React.FC<CONTENTSTYPE> = ({ newsContents }) => {
  return (
    <Detail title="News Blog" newsContents={newsContents} link="/hobby/news/" />
  )
}

export default Hobby

export const getStaticProps: GetStaticProps = async () => {
  const Fetch = await fetch(`${process.env.NEXT_PUBLIC_API_URL}news/`)
  const result = await Fetch.json()

  const dataNews: any = await client.query({
    query: Posts.newsItemsAll(result.length),
    fetchPolicy: 'network-only',
  })

  return {
    props: {
      newsContents: dataNews.data.newsItems.edges,
    },
  }
}
