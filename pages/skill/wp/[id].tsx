import React, { Fragment } from 'react'
import Link from 'next/link'
import { GetStaticPaths, GetStaticProps } from 'next'
import styles from '@/styles/Home.module.scss'
import Layout from '@/components/Layout'
import client from '@/apollo-client'
import Posts from '@/graphql/posts'
import { time } from '@/libs/util'

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
  return (
    <Layout title={`${content.title} | Skill Blog`} type="article">
      <div className={`${styles.c_article_main}`}>
        <p className="text-4xl font-bold text-center">- Skill -</p>
        <div className={`${styles.c_article_hero}`}>
          <img src="/news.svg" alt="news" />
        </div>
      </div>
      <div className={`${styles.c_column_detail_wrap}`}>
        <article className={`${styles.c_column_detail}`}>
          <div className={`${styles.c_column_detail_title}`}>
            <h1 className="text-3xl font-bold mt-7">{content.title}</h1>
            <p className="text-sm mt-5">{time(content.date)}</p>
          </div>
          <div
            className={`${styles.c_contents}`}
            dangerouslySetInnerHTML={{ __html: content.content }}
          />
        </article>
        <div className={`${styles.c_column_recommend_content}`}>
          <p
            className={`text-2xl text-center mb-4 ${styles.c_column_recommend_title}`}
          >
            - Recommend -
          </p>
          <div className={`${styles.c_column_recommend_wrap}`}>
            {contentList &&
              contentList.map((v, i) => {
                return (
                  <Fragment key={i}>
                    <section
                      className={`${styles.c_column} ${styles.c_column_recommend}`}
                    >
                      <Link href={`/skill/wp/${v.node.skillItemId}`}>
                        <a href="" className="py-5 px-5 flex flex-col-reverse">
                          <h3 className="text-xl font-bold mt-5">
                            {v.node.title}
                          </h3>
                          <p className="text-sm mt-5">{time(v.node.date)}</p>
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
