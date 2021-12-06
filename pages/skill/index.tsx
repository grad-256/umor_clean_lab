import React, { Fragment } from 'react'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import styles from '@/styles/Home.module.scss'
import Layout from '@/components/Layout'
import { time } from '@/libs/util'
import client from '@/apollo-client'
import Posts from '@/graphql/posts'

type SkillTYPE = {
  skillContents: {
    node: {
      skillItemId: number
      title: string
      date: string
    }
  }[]
  qiitaContents: {
    id: number
    title: string
    created_at: string
  }[]
}

const Skill: React.FC<SkillTYPE> = ({ skillContents, qiitaContents }) => {
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
                    <Link href={`/skill/wp/${v.node.skillItemId}`}>
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
        </section>
      </div>
    </Layout>
  )
}

export default Skill

export const getStaticProps: GetStaticProps = async () => {
  const data: any = await client.query({
    query: Posts.skillItems(),
    fetchPolicy: 'network-only',
  })

  const qiitaRes = await fetch(
    `${process.env.NEXT_PUBLIC_QIITA_API}items?per_page=100`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_QIITA}`,
      },
    }
  )
  const qiitaContents = await qiitaRes.json()

  return {
    props: {
      skillContents: data.data.skillItems.edges,
      qiitaContents: qiitaContents,
    },
  }
}
