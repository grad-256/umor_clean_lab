import React, { Fragment } from 'react'
import styles from '@/styles/Home.module.scss'
import Layout from '@/components/Layout'
import useContentsMore from '@/libs/useContentsMore'
import { time } from '@/libs/util'

const Detail = ({ title, newsContents, link }) => {
  const { ContentListState, MoreButton } = useContentsMore(newsContents)

  return (
    <Layout title={title} type="article">
      <section className={`${styles.c_article_main}`}>
        <h1 className="text-4xl font-bold text-center">- {title} -</h1>
        <div className={`${styles.c_article_hero}`}>
          <img src="/blog.svg" alt="blog" />
        </div>
      </section>

      <div className={`${styles.c_column_wrap}`}>
        <section
          className={`${styles.c_column_news} ${styles.c_column_w_full}`}
        >
          {ContentListState &&
            ContentListState.map((v, i) => {
              return (
                <Fragment key={i}>
                  <article className={`${styles.c_column}`}>
                    <a
                      href={`${link}${v.node[Object.keys(v.node)['5']]}`}
                      className={`${styles.c_column_body}`}
                    >
                      <h3 className="text-2xl font-bold mt-5">
                        {v.node.title}
                      </h3>
                      <p className="text-sm">{time(v.node.date)}</p>
                    </a>
                  </article>
                </Fragment>
              )
            })}
          <MoreButton />
        </section>
      </div>
    </Layout>
  )
}

export default Detail
