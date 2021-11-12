import React, { Fragment, useState, useEffect } from 'react'
import Link from 'next/link'
import styles from '@/styles/Home.module.scss'
import Layout from '@/components/Layout'
import Adsense from '@/components/Adsense'

const Content = ({ content, contentList, params }) => {
  return (
    <Layout title={`${content.title} | Hobby Blog`} type="article">
      <div className={`${styles.c_article_main}`}>
        <p className="text-4xl font-bold text-center">- Diary -</p>
        <div className={`${styles.c_article_hero}`}>
          <img src="/diary.svg" alt="diary" />
        </div>
      </div>
      <div className={`${styles.c_column_detail_wrap}`}>
        <article className={`${styles.c_column_detail}`}>
          <div className={`${styles.c_column_detail_title}`}>
            <h1 className="text-4xl font-bold mt-7">{content.title}</h1>
            <p className="text-sm mt-5">{content.date}</p>
          </div>
          <div
            className={`${styles.c_contents}`}
            dangerouslySetInnerHTML={{ __html: content.content }}
          />
        </article>
        <div>
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
                      <Link href={`/hobby/diary/${v.id}`}>
                        <a href="" className="py-5 px-5 flex flex-col-reverse">
                          <h3 className="text-xl font-bold mt-5">{v.title}</h3>
                          <p className="text-sm">{v.date}</p>
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

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}diary`)
  const json = await res.json()

  const paths = json.map((contents) => {
    return `/hobby/diary/${contents.id}`
  })

  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}diary`)
  const json = await res.json()

  const filterContents = json.filter((v, i) => {
    return v.id === Number(params.id)
  })

  return {
    props: {
      content: filterContents[0],
      contentList: json,
      params: params,
    },
  }
}
