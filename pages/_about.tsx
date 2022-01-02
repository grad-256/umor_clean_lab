import React, { Fragment } from 'react'
import styles from '@/styles/Home.module.scss'
import Layout from '@/components/Layout'

const About: React.FC = () => {
  return (
    <Layout title="このサイトについて | Hobby Blog" type="article">
      <section className={`c_article_main`}>
        <h1 className="text-4xl font-bold text-center">- About -</h1>
        <div className={`c_article_hero`}>
          <img src="/about.svg" alt="about" />
        </div>
      </section>

      <div
        className={`flex mx-auto items-start justify-center maxonlylg:w-full maxonlylg:block`}
      >
        <section className={`c_column_detail c_column_detail_full`}>
          <div
            className={`flex flex-col-reverse border-b-[2px] border-solid border-color-[#00aa6e] text-center pb-6`}
          >
            <h2 className="text-3xl font-bold">このサイトについて</h2>
          </div>
          <p className="text-base mt-7">
            Umor Clean Lab - UCLab
            -のプロフィールを兼ねた趣味を掲載しているサイトです。日々の学習のアウトプットに使用しています。
          </p>
          <h3 className="text-xl font-bold mt-7">屋号の由来</h3>
          <p className="text-base mt-7">
            <strong>UCLab</strong>は(H)Umor Clean
            Labの省略した名前になります。UCLabには、ユーモアとクリーンは僕の好きな言葉です。この二つの言葉を合体し当て字も利用して命名しました。ユーモアは人に喜ばせる、クリーンは環境に気を配るという意味を持たせています。
          </p>
        </section>
      </div>
    </Layout>
  )
}

export default About
