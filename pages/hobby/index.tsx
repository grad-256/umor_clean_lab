import React, { Fragment } from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import styles from '@/styles/Home.module.scss'
import Layout from '@/components/Layout'
import Adsense from '@/components/Adsense'

export default function Hobby({ newsContents, diaryContents }: any) {
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
                    <Link href={`/hobby/news/${v.id}`}>
                      <a href="" className={`${styles.c_column_body}`}>
                        <h3 className="text-2xl font-bold mt-5">{v.title}</h3>
                        <p className="text-sm">{v.date}</p>
                      </a>
                    </Link>
                    {/* <div>
                      {v.categories.map((v, i) => {
                        return (
                          <Fragment key={i}>
                            <Link href={`/news/category/${v.id}`}>
                              <a href="">
                                <p>{v.name}</p>
                              </a>
                            </Link>
                          </Fragment>
                        )
                      })}
                    </div> */}
                  </article>
                </Fragment>
              )
            })}
        </section>
        <section className={`${styles.c_column_diary}`}>
          <h2 className={`${styles.c_column_title}`}>Diary</h2>
          {diaryContents &&
            diaryContents.map((v, i) => {
              return (
                <Fragment key={i}>
                  <article className={`${styles.c_column}`}>
                    <Link href={`/hobby/diary/${v.id}`}>
                      <a href="" className="py-5 px-5 flex flex-col-reverse">
                        <h3 className="text-xl font-bold mt-5">{v.title}</h3>
                        <p className="text-sm">{v.date}</p>
                      </a>
                    </Link>
                  </article>
                </Fragment>
              )
            })}
        </section>
      </div>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const newsRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}news`)
  const diaryRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}diary`)
  const newsContents = await newsRes.json()
  const diaryContents = await diaryRes.json()

  return {
    props: {
      newsContents: newsContents,
      diaryContents: diaryContents,
    },
  }
}
