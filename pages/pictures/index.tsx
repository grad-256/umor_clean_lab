import React, { Fragment } from 'react'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import styles from '@/styles/Home.module.scss'
import Layout from '@/components/Layout'
import client from '@/apollo-client'
import Posts from '@/graphql/posts'
import { time } from '@/libs/util'

type PicturesTYPE = {
  pictureListContents: {
    node: {
      title: string
      date: string
      postId: number
      featuredImage: { node: { sourceUrl: string } }
    }
  }[]
}

const Pictures: React.FC<PicturesTYPE> = ({ pictureListContents }) => {
  return (
    <Layout title="Pictures" type="article">
      <section className={`${styles.c_article_main}`}>
        <h1 className="text-4xl font-bold text-center">- Pictures -</h1>
        <div className={`${styles.c_article_hero}`}>
          <img src="/blog.svg" alt="blog" />
        </div>
      </section>

      <div className={`${styles.c_column_wrap}`}>
        <section className={`${styles.c_pictures_contents}`}>
          <h2 className={`${styles.c_column_title}`}>Pictures</h2>
          <div className={`${styles.c_pictures_list}`}>
            {pictureListContents &&
              pictureListContents.map((v, i: React.Key) => {
                if (v.node.featuredImage === null) return

                return (
                  <Fragment key={i}>
                    <article className={`${styles.c_pictures}`}>
                      <Link href={`/pictures/${v.node.postId}`}>
                        <a href="" className={`${styles.c_pictures_body}`}>
                          <h3 className="text-xl font-bold mt-5">
                            {v.node.title}
                          </h3>
                          <p className="text-base mt-1">{time(v.node.date)}</p>
                          <div className={`${styles.c_thumnail} mt-2`}>
                            <img
                              src={v.node.featuredImage.node.sourceUrl}
                              alt={v.node.title}
                            />
                          </div>
                        </a>
                      </Link>
                    </article>
                  </Fragment>
                )
              })}
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Pictures

export const getStaticProps: GetStaticProps = async () => {
  const Fetch = await fetch(
    `${process.env.NEXT_PUBLIC_POSTS_API_URL}?_fields=id`
  )
  const result = await Fetch.json()

  const data: any = await client.query({
    query: Posts.getItemsAll(result.length),
    fetchPolicy: 'network-only',
  })

  return {
    props: {
      pictureListContents: data.data.posts.edges,
    },
  }
}
