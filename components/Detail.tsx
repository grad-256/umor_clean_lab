import React, { Fragment } from 'react'
import Link from 'next/link'
import styles from '@/styles/Home.module.scss'
import Layout from '@/components/Layout'
import useContentsMore from '@/libs/useContentsMore'
import { time } from '@/libs/util'

const Detail = ({ title, newsContents, link }) => {
  const { handleMoreBottom, MoreButtonState, ContentListState } =
    useContentsMore(newsContents)

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
                    <Link href={`${link}${v.node[Object.keys(v.node)['5']]}`}>
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

          <button
            onClick={() => handleMoreBottom()}
            type="button"
            disabled={MoreButtonState}
            className="disabled:opacity-30 mt-10 text-base rounded-full text-[#35478C] border-2 border-primary border-solid text-center block font-bold maxtb:text-sm py-2 px-4 w-full"
          >
            もっと見る
          </button>
        </section>
      </div>
    </Layout>
  )
}

export default Detail
