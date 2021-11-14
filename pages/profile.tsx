import React from 'react'
import styles from '@/styles/Home.module.scss'
import Layout from '@/components/Layout'

const Profile = () => {
  return (
    <Layout title="プロフィール | Hobby Blog" type="article">
      <section className={`${styles.c_article_main}`}>
        <h1 className="text-4xl font-bold text-center">- Profile -</h1>
        <div className={`${styles.c_article_hero}`}>
          <img src="/profile.svg" alt="profile" />
        </div>
      </section>

      <div className={`${styles.c_column_detail_wrap} justify-center`}>
        <section className={`${styles.c_column_detail}`}>
          <div className={`${styles.c_column_detail_title} text-center pb-6`}>
            <h2 className="text-3xl font-bold">プロフィール</h2>
          </div>

          <div className={`${styles.c_hero}`}>
            <img src="/hero.jpg" alt="宮宇地勝の画像" />
          </div>
          <h3 className="text-xl font-bold mt-7">紹介</h3>
          <p className="text-base">よかったら下記のリンクもご覧ください。</p>
          <a
            href="https://www.wantedly.com/users/18326371/post_articles/279639"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base underline"
          >
            社会貢献したいと思うようになった理由
          </a>
          <p className="text-base mt-7 leading-7">
            1987/5/25
            香川県生まれの京都育ち大阪在住です。大手アパレル会社販売員からWebエンジニアへ転向しました。
          </p>
          <p className="text-base mt-3 leading-7">
            web業界に入るまではアパレル業界に約7年ほどおりました。そこでECサイトの立ち上げがあり、興味本位で出会ったのがフロントエンドエンジニアの方なら誰でも使用しているであろうHTML・CSS・Javascriptでした。
            今となっては、欠かせない言語となり、Webエンジニアとしてフロントエンド開発を行っております。
          </p>
          <p className="text-base mt-3 leading-7">
            フロントエンドエンジニアとして約7年システム会社や制作会社で実装経験を積み、デザイン思考の知識も必要と感じ知識収集のためにそれに関係してそうな資格を取得しました。
            <br />
            単純な設計、開発業務だけではなく日々アップデートされる最新技術をキャッチアップし、常に技術的な視点からの提案ができるよう日々学習に取り組んでおります。
            <br />
            デザイン業務の経験はありませんがHPやLP、アニメーション実装やシステム系フロントエンド構築など実務経験幅が広く様々な場面で対応可能ですし、販売員経験で培ったコミュニケーション力が武器です。
          </p>
          <h3 className="text-xl font-bold mt-7">最近気が付いたこと</h3>
          <p className="text-base mt-3 leading-7">
            ESG思考やDX思考は当然であることです。
            <br />
            環境にやさしいもの作りをしたりそういったものを買ったり、働く環境にITを導入し生産性を上げたり、生産性を上げるためにどんな技術があるのかを知ることは特別なことではないように思いました。
          </p>
          <h3 className="text-xl font-bold mt-7">職務経歴</h3>
          <p className="text-base mt-7">Comming Soom ....</p>
          <h3 className="text-xl font-bold mt-7">実績案件</h3>
          <p className="text-base mt-7">Comming Soom ....</p>
          <h3 className="text-xl font-bold mt-7">開発時に心掛けていること</h3>
          <ul className={`text-base mt-3 ${styles.c_column_purpose_list}`}>
            <li>利用者の使い心地</li>
            <li>技術面で何かチャレンジできることはないか</li>
            <li>コードはわかりやすいか</li>
            <li>
              保守性もしかり、複数人で開発する際のコンポーネント設計においてわかりやすいか
            </li>
            <li>
              UI/UXの内容についてコミュニケーションを取り、クライアントの希望に沿った内容になっているか
            </li>
          </ul>

          <h3 className="text-xl font-bold mt-7">資格取得</h3>
          <p className="text-base mt-3">
            ユーザー視点を学習するために以下の資格を取得しました。
          </p>
          <ul className={`text-base mt-3 ${styles.c_column_purpose_list}`}>
            <li>インテリアデザイナー</li>
            <li>ホームページWebデザイナー</li>
            <li>SEOマーケティングアドバイザー</li>
            <li>Googleデジタルマーケティング認定</li>
            <li>Googleアナリティクス個人認定資格</li>
          </ul>
          <h3 className="text-xl font-bold mt-7">趣味</h3>
          <ul className={`text-base mt-3 ${styles.c_column_purpose_list}`}>
            <li>映画鑑賞</li>
            <li>本屋さんで知識の収集をすること</li>
            <li>本を読んで実践してみること</li>
            <li>町中を歩き回って初めてを探すこと</li>
            <li>雰囲気を写真で収めること</li>
          </ul>
          <h3 className="text-xl font-bold mt-7">関心のあること</h3>
          <ul className={`text-base mt-3 ${styles.c_column_purpose_list}`}>
            <li>システム設計の知識や経験を積む</li>
            <li>脱炭素に向けたサービス開発</li>
            <li>官公庁・企業DXに向けたサービス開発</li>
            <li>株式投資</li>
          </ul>
          <h3 className="text-xl font-bold mt-7">SNS</h3>
          <div className={`${styles.c_icon_wrap} mt-4`}>
            <a
              href="https://github.com/grad-256"
              target="_blank"
              rel="noreferrer"
              className={`${styles.c_icon}`}
            >
              <img src="/icon_github.png" alt="" />
            </a>
            <a
              href="https://twitter.com/masaru_free"
              target="_blank"
              rel="noreferrer"
              className={`${styles.c_icon} ${styles.c_icon_twitter} ml-3`}
            >
              <img src="/icon_twitter.svg" alt="" />
            </a>
          </div>
          <h3 className="text-xl font-bold mt-7">お問い合わせ</h3>
          <p className="text-base mt-7">
            ここまで、お読みいただいてありがとうございます。興味を持っていただけましたら、
            <a
              href="https://twitter.com/masaru_free"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
            のDMにお気軽にご連絡ください。
          </p>
        </section>
      </div>
    </Layout>
  )
}

export default Profile
