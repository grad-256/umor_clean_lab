import React, { Fragment } from 'react'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import useSWR from 'swr'
import styles from '@/styles/Home.module.scss'
import Layout from '@/components/Layout'
import Adsense from '@/components/Adsense'
import { time } from '@/libs/util'

export default function Skill({ skillContents, qiitaContents }: any) {
  return (
    <Layout title="Skill Blog" type="article">
      <section className={`${styles.c_article_main}`}>
        <h1 className="text-4xl font-bold text-center">- Skill Blog -</h1>
        <div className={`${styles.c_article_hero}`}>
          <img src="/blog.svg" alt="blog" />
        </div>
      </section>

      <div className={`${styles.c_column_wrap}`}>
        <section className={`${styles.c_column_news} text-base`}>
          <h2 className={`${styles.c_column_title}`}>Skill - Qiita -</h2>
          {qiitaContents &&
            qiitaContents.map((v, i) => {
              return (
                <Fragment key={i}>
                  <article className={`${styles.c_column}`}>
                    <Link href={`/skill/qiita/${v.id}`}>
                      <a href="" className={`${styles.c_column_body}`}>
                        <h3 className="text-2xl font-bold mt-5">{v.title}</h3>
                        <p className="text-sm">{time(v.created_at)}</p>
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
          <h2 className={`${styles.c_column_title}`}>Skill - WP -</h2>
          {skillContents &&
            skillContents.map((v, i) => {
              return (
                <Fragment key={i}>
                  <article className={`${styles.c_column}`}>
                    <Link href={`/skill/wp/${v.id}`}>
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

export const getStaticProps: GetStaticProps = async () => {
  const skillRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}skill`)
  const qiitaRes = await fetch(
    `${process.env.NEXT_PUBLIC_QIITA_API}items?per_page=100`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_QIITA}`,
      },
    }
  )
  const skillContents = await skillRes.json()
  const qiitaContents = await qiitaRes.json()

  return {
    props: {
      skillContents: skillContents,
      qiitaContents: qiitaContents,
    },
  }
}
