import React, { Fragment } from 'react'
import Link from 'next/link'
import styles from '@/styles/Home.module.scss'
import Layout from '@/components/Layout'

const Covid = ({ diaryContents }) => {
  return (
    <Layout
      title="大阪のコロナ感染データをグラフ化しました | DATA"
      type="article"
    >
      <section className={`${styles.c_article_main}`}>
        <h1 className="text-4xl font-bold text-center">
          - 大阪のコロナ感染データ -
        </h1>
        <div className={`${styles.c_article_hero}`}>
          <img src="/about.svg" alt="about" />
        </div>
      </section>

      <div className={`${styles.c_column_detail_wrap} justify-center`}>
        <section className={`${styles.c_column_detail}`}>
          <div className={`${styles.c_column_detail_title} text-center pb-6`}>
            <h2 className="text-3xl font-bold">構築中</h2>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Covid

export const getStaticProps = async () => {
  const diaryRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}diary`)
  const diaryContents = await diaryRes.json()

  return {
    props: {
      diaryContents: diaryContents,
    },
  }
}
