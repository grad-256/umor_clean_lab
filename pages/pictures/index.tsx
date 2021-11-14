import React, { Fragment } from 'react'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import useSWR from 'swr'
import styles from '@/styles/Home.module.scss'
import Layout from '@/components/Layout'
import Adsense from '@/components/Adsense'
import client from '@/apollo-client'
import Posts from '@/graphql/posts'
import { time } from '@/libs/util'
import { ParsedUrlQuery } from 'node:querystring'

type PicturesTYPE = {
  node: {
    title: string
    date: string
    postId: number
    featuredImage: { node: { sourceUrl: string } }
  }
}

export default function Pictures({ pictureListContents }) {
  return (
    <Layout title="Pictures" type="article">
      <section className={`${styles.c_article_main}`}>
        <h1 className="text-4xl font-bold text-center">- Pictures -</h1>
        <div className={`${styles.c_article_hero}`}>
          <img src="/blog.svg" alt="blog" />
        </div>
      </section>

      <div className={`${styles.c_column_wrap}`}>
        <section className={`${styles.c_pictures_contents}`}>
          <h2 className={`${styles.c_column_title}`}>Pictures</h2>
          <div className={`${styles.c_pictures_list}`}>
            {pictureListContents &&
              pictureListContents.map((v: PicturesTYPE, i: React.Key) => {
                return (
                  <Fragment key={i}>
                    <article className={`${styles.c_pictures}`}>
                      <Link href={`/pictures/${v.node.postId}`}>
                        <a href="" className={`${styles.c_pictures_body}`}>
                          <h3 className="text-xl font-bold mt-5">
                            {v.node.title}
                          </h3>
                          <p className="text-base mt-1">{time(v.node.date)}</p>
                          <div className={`${styles.c_thumnail} mt-2`}>
                            <img
                              src={v.node.featuredImage.node.sourceUrl}
                              alt={v.node.title}
                            />
                          </div>
                        </a>
                      </Link>
                    </article>
                  </Fragment>
                )
              })}
          </div>
        </section>
      </div>
    </Layout>
  )
}

interface Params extends ParsedUrlQuery {
  id: string
}

export const getStaticProps: GetStaticProps = async () => {
  const data: any = await client.query({
    query: Posts.getItems(),
    fetchPolicy: 'network-only',
  })

  return {
    props: {
      pictureListContents: data.data.posts.edges,
    },
  }
}
