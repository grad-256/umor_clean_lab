import React, { Fragment } from 'react'
import Link from 'next/link'
import styles from '@/styles/Home.module.scss'
import Layout from '@/components/Layout'
import useContentsMore from '@/libs/useContentsMore'
import { time } from '@/libs/util'
import { usePagenation } from '@/libs/usePagenation'

const PageDiary = ({ pagename, postId, title, URL, content, contentList }) => {
  const { handleMoreBottom, ContentListState, MoreButtonState } =
    useContentsMore(contentList)
  const { PageNumberState } = usePagenation({ pagename, postId, contentList })

  return (
    <Layout title={`${content.title} | ${title}`} type="article">
      <div className={`${styles.c_article_main}`}>
        <p className="text-4xl font-bold text-center">- {`${title}`}-</p>
        <div className={`${styles.c_article_hero}`}>
          <img src="/blog.svg" alt="blog" />
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
          <div className="flex justify-between mt-10">
            {PageNumberState.prev !== undefined && (
              <a
                href={`${URL}${PageNumberState.prev}`}
                className="mr-auto ml-0 text-lg base_button w-[5rem]"
              >
                <div className="flex items-center justify-center">
                  <span>PREV</span>
                </div>
              </a>
            )}
            {PageNumberState.next !== undefined && (
              <a
                href={`${URL}${PageNumberState.next}`}
                className="mr-0 ml-auto text-lg base_button w-[5rem]"
              >
                <div className="flex items-center justify-center">
                  <span>NEXT</span>
                </div>
              </a>
            )}
          </div>
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
                      <Link href={`${URL}${v.node[Object.keys(v.node)['5']]}`}>
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
            <button
              onClick={() => handleMoreBottom()}
              type="button"
              disabled={MoreButtonState}
              className="mt-10 text-base rounded-full text-[#35478C] border-2 border-primary border-solid text-center block font-bold maxtb:text-sm py-2 px-4 w-full"
            >
              もっと見る
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PageDiary
