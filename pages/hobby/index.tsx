import React, { Fragment } from 'react'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import styles from '@/styles/Home.module.scss'
import Layout from '@/components/Layout'
import { time } from '@/libs/util'
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
  diaryContents: {
    node: {
      diaryItemId: number
      title: string
      date: string
    }
  }[]
}

const Hobby: React.FC<CONTENTSTYPE> = ({ newsContents, diaryContents }) => {
  return (
    <Layout title="Hobby Blog" type="article">
      <section className={`${styles.c_article_main}`}>
        <h1 className="text-4xl font-bold text-center">- Hobby Blog -</h1>
        <div className={`${styles.c_article_hero}`}>
          <img src="/blog.svg" alt="blog" />
        </div>
      </section>

      <div className={`${styles.c_column_wrap}`}>
        <section className={`${styles.c_column_news}`}>
          <h2 className={`${styles.c_column_title}`}>News</h2>
          {newsContents &&
            newsContents.map((v, i) => {
              return (
                <Fragment key={i}>
                  <article className={`${styles.c_column}`}>
                    <Link href={`/hobby/news/${v.node.newsItemId}`}>
                      <a href="" className={`${styles.c_column_body}`}>
                        <h3 className="text-2xl font-bold mt-5">
                          {v.node.title}
                        </h3>
                        <p className="text-sm">{time(v.node.date)}</p>
                      </a>
                    </Link>
                  </article>
                </Fragment>
              )
            })}

          <Link href={`/hobby/news/`}>
            <a
              href=""
              className="mt-10 text-base rounded-full text-[#35478C] border-2 border-primary border-solid text-center block font-bold maxtb:text-sm py-2 px-4 maxsm:w-10/12"
            >
              もっと見る
            </a>
          </Link>
        </section>
        <section className={`${styles.c_column_diary}`}>
          <h2 className={`${styles.c_column_title}`}>Diary</h2>
          {diaryContents &&
            diaryContents.map((v, i) => {
              return (
                <Fragment key={i}>
                  <article className={`${styles.c_column}`}>
                    <Link href={`/hobby/diary/${v.node.diaryItemId}`}>
                      <a href="" className="py-5 px-5 flex flex-col-reverse">
                        <h3 className="text-xl font-bold mt-5">
                          {v.node.title}
                        </h3>
                        <p className="text-sm">{time(v.node.date)}</p>
                      </a>
                    </Link>
                  </article>
                </Fragment>
              )
            })}
          <Link href={`/hobby/diary/`}>
            <a
              href=""
              className="mt-10 text-base rounded-full text-[#35478C] border-2 border-primary border-solid text-center block font-bold maxtb:text-sm py-2 px-4 maxsm:w-10/12"
            >
              もっと見る
            </a>
          </Link>
        </section>
      </div>
    </Layout>
  )
}

export default Hobby

export const getStaticProps: GetStaticProps = async () => {
  const dataNews: any = await client.query({
    query: Posts.newsItems(),
    fetchPolicy: 'network-only',
  })
  const dataDiary: any = await client.query({
    query: Posts.diaryItems(),
    fetchPolicy: 'network-only',
  })

  return {
    props: {
      newsContents: dataNews.data.newsItems.edges,
      diaryContents: dataDiary.data.diaryItems.edges,
    },
  }
}
