import React from 'react'
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
    <Detail title="Skill Blog" newsContents={newsContents} link="/skill/wp/" />
  )
}

export default Hobby

export const getStaticProps: GetStaticProps = async () => {
  const Fetch = await fetch(`${process.env.NEXT_PUBLIC_API_URL}skill/`)
  const result = await Fetch.json()

  const dataNews: any = await client.query({
    query: Posts.skillItemsAll(result.length),
    fetchPolicy: 'network-only',
  })

  return {
    props: {
      newsContents: dataNews.data.skillItems.edges,
    },
  }
}
