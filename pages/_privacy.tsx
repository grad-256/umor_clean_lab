import React from 'react'
import styles from '@/styles/Home.module.scss'
import Layout from '@/components/Layout'

const Privacy: React.FC = () => {
  return (
    <Layout title="プライバシーポリシー | Hobby Blog" type="article">
      <section className={`${styles.c_article_main}`}>
        <h1 className="text-4xl font-bold text-center">- Privacy -</h1>
        <div className={`${styles.c_article_hero}`}>
          <img src="/privacy.svg" alt="privacy" />
        </div>
      </section>

      <div className={`${styles.c_column_detail_wrap} justify-center`}>
        <section
          className={`${styles.c_column_detail} ${styles.c_column_detail_full}`}
        >
          <div className={`${styles.c_column_detail_title} text-center pb-6`}>
            <h2 className="text-3xl font-bold">プライバシーポリシー</h2>
          </div>
          <h3 className="text-xl font-bold mt-7">個人情報の利用目的</h3>
          <p className="text-base mt-7 leading-7">
            当ブログでは、お問い合わせや記事へのコメントの際、名前やメールアドレス等の個人情報を入力いただく場合がございます。
            取得した個人情報は、お問い合わせに対する回答や必要な情報を電子メールなどをでご連絡する場合に利用させていただくものであり、これらの目的以外では利用いたしません。
          </p>
          <h3 className="text-xl font-bold mt-7">広告について</h3>
          <p className="text-base mt-7 leading-7">
            当ブログでは、第三者配信の広告サービス（Googleアドセンス、A8.net、もしもアフェリエイト）を利用しており、ユーザーの興味に応じた商品やサービスの広告を表示するため、クッキー（Cookie）を使用しております。
            クッキーを使用することで当サイトはお客様のコンピュータを識別できるようになりますが、お客様個人を特定できるものではありません。
          </p>
          <p className="text-base mt-7 leading-7">
            Cookieを無効にする方法やGoogleアドセンスに関する詳細は「
            <a href="https://policies.google.com/technologies/ads?gl=jp">
              広告 – ポリシーと規約 – Google
            </a>
            」をご確認ください。
          </p>
          {/* <p className="text-base mt-7">
        また、●●は、Amazon.co.jpを宣伝しリンクすることによってサイトが紹介料を獲得できる手段を提供することを目的に設定されたアフィリエイトプログラムである、Amazonアソシエイト・プログラムの参加者です。{' '}
      </p> */}
          <h3 className="text-xl font-bold mt-7">アクセス解析ツールについて</h3>
          <p className="text-base mt-7 leading-7">
            当ブログでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。このGoogleアナリティクスはトラフィックデータの収集のためにクッキー（Cookie）を使用しております。トラフィックデータは匿名で収集されており、個人を特定するものではありません。
          </p>
          <h3 className="text-xl font-bold mt-7">免責事項</h3>
          <p className="text-base mt-7 leading-7">
            当ブログからのリンクやバナーなどで移動したサイトで提供される情報、サービス等について一切の責任を負いません。
            <br />
            また当ブログのコンテンツ・情報について、できる限り正確な情報を提供するように努めておりますが、正確性や安全性を保証するものではありません。情報が古くなっていることもございます。
            <br />
            当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
          </p>
          <h3 className="text-xl font-bold mt-7">お問い合わせ</h3>
          <p className="text-base mt-7">
            <a
              href="https://twitter.com/masaru_free"
              className="underline"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
            のDMにお願いします
          </p>
          <h3 className="text-xl font-bold mt-7">著作権について</h3>
          <p className="text-base mt-7 leading-7">
            当ブログで掲載している文章や画像などにつきましては、無断転載することを禁止します。
            <br />
            当ブログは著作権や肖像権の侵害を目的としたものではありません。著作権や肖像権に関して問題がございましたら、Twitter
            DMよりご連絡ください。迅速に対応いたします。
          </p>
          <h3 className="text-xl font-bold mt-7">リンクについて</h3>
          <p className="text-base mt-7 leading-7">
            当ブログは基本的にリンクフリーです。リンクを行う場合の許可や連絡は不要です。
            <br />
            ただし、インラインフレームの使用や画像の直リンクはご遠慮ください。
          </p>
          <h3 className="text-xl font-bold mt-7">コメントについて</h3>
          <p className="text-base mt-7 leading-7">
            当ブログへのコメントを残す際に、IP アドレスを収集しています。
            <br />
            これはブログの標準機能としてサポートされている機能で、スパムや荒らしへの対応以外にこのIPアドレスを使用することはありません。
            <br />
            なお、全てのコメントは管理人が事前にその内容を確認し、承認した上での掲載となります。あらかじめご了承ください。
          </p>
        </section>
      </div>
    </Layout>
  )
}

export default Privacy
