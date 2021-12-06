import React, { Fragment, useState, useEffect } from 'react'
import Link from 'next/link'
import { GetStaticProps, GetStaticPaths } from 'next'
import styles from '@/styles/Home.module.scss'
import Layout from '@/components/Layout'
import client from '@/apollo-client'
import Posts from '@/graphql/posts'
import { time } from '@/libs/util'
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
    <Layout title={`${pictureListContents.title} | Pictures`} type="article">
      <div className={`${styles.c_article_main}`}>
        <p className="text-4xl font-bold text-center">- Pictures -</p>
        <div className={`${styles.c_article_hero}`}>
          <img src="/diary.svg" alt="diary" />
        </div>
      </div>
      <div className={`${styles.c_column_detail_wrap}`}>
        <article className={`${styles.c_column_detail}`}>
          <div className={`${styles.c_column_detail_title}`}>
            <h1 className="text-4xl font-bold mt-7">
              {pictureListContents.title}
            </h1>
            <p className="text-sm mt-5">{time(pictureListContents.date)}</p>
          </div>
          <div
            className={`${styles.c_contents}`}
            dangerouslySetInnerHTML={{ __html: pictureListContents.content }}
          />
        </article>
        <div className={`${styles.c_column_recommend_content}`}>
          <p
            className={`text-2xl text-center mb-4 ${styles.c_column_recommend_title}`}
          >
            - Recommend -
          </p>
          <div className={`${styles.c_column_recommend_wrap}`}>
            {pictureList &&
              pictureList.map((v, i) => {
                return (
                  <Fragment key={i}>
                    <section
                      className={`${styles.c_column} ${styles.c_column_recommend}`}
                    >
                      <Link href={`/pictures/${v.node.postId}`}>
                        <a href="" className="py-5 px-5 flex flex-col-reverse">
                          <h3 className="text-xl font-bold mt-5">
                            {v.node.title}
                          </h3>
                          <p className="text-sm">{time(v.node.date)}</p>
                        </a>
                      </Link>
                    </section>
                  </Fragment>
                )
              })}
          </div>
        </div>
      </div>
    </Layout>
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
