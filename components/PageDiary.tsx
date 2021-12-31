import React, { Fragment, useState, useEffect } from 'react'
import Link from 'next/link'
import styles from '@/styles/Home.module.scss'
import Layout from '@/components/Layout'
import { time } from '@/libs/util'

const PageDiary = ({ content, contentList }) => {
  return (
    <Layout title={`${content.title} | Pictures`} type="article">
      <div className={`${styles.c_article_main}`}>
        <p className="text-4xl font-bold text-center">- Pictures -</p>
        <div className={`${styles.c_article_hero}`}>
          <img src="/diary.svg" alt="diary" />
        </div>
      </div>
      <div className={`${styles.c_column_detail_wrap}`}>
        <article className={`${styles.c_column_detail}`}>
          <div className={`${styles.c_column_detail_title}`}>
            <h1 className="text-4xl font-bold mt-7">{content.title}</h1>
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
                      <Link href={`/hobby/diary/${v.node.diaryItemId}`}>
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

export default PageDiary
