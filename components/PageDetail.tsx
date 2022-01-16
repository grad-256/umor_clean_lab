import React, { Fragment } from 'react'
import styles from '@/styles/Home.module.scss'
import Layout from '@/components/Layout'
import useContentsMore from '@/libs/useContentsMore'
import { time } from '@/libs/util'
import { usePagenation } from '@/libs/usePagenation'

const PageDetail = ({ pagename, postId, title, URL, content, contentList }) => {
  const { ContentListState, MoreButton } = useContentsMore(contentList)
  const { PageNationComponent } = usePagenation({
    pagename,
    postId,
    URL,
    contentList,
  })

  return (
    <Layout title={`${content.title} | ${title}`} type="article">
      <div className={`${styles.c_article_main}`}>
        <p className="text-4xl font-bold text-center">- {`${title}`}-</p>
        <div className={`${styles.c_article_hero}`}>
          <img src={`/${pagename}.svg`} alt={`${pagename}`} />
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
          <PageNationComponent />
        </article>
        <div className={`${styles.c_column_recommend_content}`}>
          <p
            className={`text-2xl text-center mb-4 ${styles.c_column_recommend_title}`}
          >
            - Recommend -
          </p>
          <div className={`${styles.c_column_recommend_wrap}`}>
            {ContentListState &&
              ContentListState.map((v, i) => {
                return (
                  <Fragment key={i}>
                    <section
                      className={`${styles.c_column} ${styles.c_column_recommend}`}
                    >
                      <a
                        href={`${URL}${v.node[Object.keys(v.node)['5']]}`}
                        className="py-5 px-5 flex flex-col-reverse"
                      >
                        <h3 className="text-xl font-bold mt-5">
                          {v.node.title}
                        </h3>
                        <p className="text-sm">{time(v.node.date)}</p>
                      </a>
                    </section>
                  </Fragment>
                )
              })}
            <MoreButton />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PageDetail
