import React from 'react'
import { GetStaticProps } from 'next'
import Layout from '@/components/Layout'
import client from '@/apollo-client'
import Posts from '@/graphql/posts'

const Index = ({ content }) => {
  return (
    <Layout title="Umor Clean Lab" type="website">
      <h1
        className={`text-5xl font-bold text-center mt-10 mb-20 maxonlylg:mt-5`}
      >
        UCLab
      </h1>
      <div dangerouslySetInnerHTML={{ __html: content.content }} />
    </Layout>
  )
}

export default Index

export const getStaticProps: GetStaticProps = async () => {
  const pageContents: any = await client.query({
    query: Posts.pageBy('top'),
    fetchPolicy: 'network-only',
  })

  return {
    props: {
      content: pageContents.data.pageBy,
    },
  }
}
