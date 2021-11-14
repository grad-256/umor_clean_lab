import React, { Fragment, useState, useEffect } from 'react'
import Link from 'next/link'
import styles from '@/styles/Home.module.scss'
import Layout from '@/components/Layout'
import Adsense from '@/components/Adsense'
import client from '@/apollo-client'
import Posts from '@/graphql/posts'
import { time } from '@/libs/util'

const Content = ({ pictureListContents, pictureList }) => {
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
      {/* <Adsense /> */}
    </Layout>
  )
}

export default Content

//
export const getStaticPaths = async () => {
  const data: any = await client.query({
    query: Posts.getItems(),
    fetchPolicy: 'network-only',
  })
  const posts = data.data.posts.edges
  //console.log(data);
  const paths = []
  posts.map((item, index) => {
    //    console.log(item.node.postId);
    let row = { params: { id: String(item.node.postId) } }
    paths.push(row)
  })

  return {
    paths: paths,
    fallback: false,
  }
}
export const getStaticProps = async (context) => {
  const postId = context.params.id

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
