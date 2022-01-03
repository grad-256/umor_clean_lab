import React from 'react'
import Layout from '@/components/Layout'
import Link from 'next/link'
import styles from '@/styles/Home.module.scss'
import Adsense from '@/components/Adsense'
import ContentMainTitle from '@/components/ContentMainTitle'
import ProfileChartjs from '@/components/ProfileChartjs'

const Index: React.FC = () => {
  return (
    <Layout title="Umor Clean Lab" type="website">
      <h1
        className={`text-5xl font-bold text-center mt-10 mb-20 maxonlylg:mt-5`}
      >
        UCLab
      </h1>
      <ContentMainTitle title="Coding" imgname="coding" />

      <div
        className={`flex justify-center items-start maxonlylg:block maxonlylg:w-full`}
      >
        <section
          className={`bg-white rounded-[10px] w-full py-10 px-10 mr-5 maxonlylg:py-7 maxonlylg:px-3 maxonlylg:block maxonlylg:w-full maxonlylg:mx-auto c_column_detail_full`}
        >
          <div
            className={`flex flex-col-reverse border-b-[2px] border-solid border-[#00aa6e] text-center pb-6`}
          >
            <h2 className="text-3xl font-bold">コーディング</h2>
          </div>
          <h3 className="text-xl font-bold mt-7">PR</h3>
          <p className="text-base mt-3">
            利用している方々の利益になっているかなど相手の幸福感や達成感も自身の満足度・やりがい・達成感・幸福度に強く影響する性格です。デザイン思考を学んだことで利用者を意識した開発をするようになったので、技術はプロダクト実現の手段なのだと思うようになりました。
          </p>
          <p className="text-base mt-3">
            会社に在籍していると自分が関わりたいことになかなか関われず、自分の興味は多種多様で環境問題や官公庁・企業DXに強く関心があります。そういったプロジェクトにアサインするチャンスを掴めやすいかもしれないと思い、独立意欲もあったことからフリーランスエンジニアとして案件に携わりたいと思うようになりました。
          </p>
          <p className="mt-3">
            <a
              href="https://lapras.com/public/QB0CVDG"
              target="_new"
              rel="noopener noreferrer"
              className="text-base underline font-bold"
            >
              測定したポートフォリオはこちらにあります。
            </a>
          </p>
          <h3 className="text-xl font-bold mt-10">Purpose</h3>
          <ul className={`c_column_purpose_list`}>
            <li>
              IT従事者として社会に貢献し誰かの生活に影響が出ている状態を作るため
            </li>
            <li>
              社会に貢献できるシステムを自分が作る時やそういったシステムを作ろうとしている人の力になるため
            </li>
            <li>誰かのために自分のできることで貢献するため</li>
          </ul>

          <h3 className="text-xl font-bold mt-10">強み・武器</h3>
          <ul className={`c_column_purpose_list`}>
            <li>UI/UX開発（API連携含む）</li>
            <li>CSSアニメーション作成</li>
            <li>
              ホームページやLP、アニメーション実装やシステム系フロントエンド構築やHeadlessCMSなど実装経験が広いので幅広く対応が可能
            </li>
            <li>販売員経験から培ったコミュニケーション力</li>
          </ul>
          <h3 className="text-xl font-bold mt-10">Skill</h3>
          <p className="text-base mt-6">
            大まかなスキルを以下の表にまとめます。
            <br />
            フロントエンドエンジニアとして約7年程システム会社や制作会社で実装経験を積みました。
          </p>
          <div className="text-base mt-6">
            <p>
              よかったら
              <Link href="/profile/">
                <a className="underline">Profile</a>
              </Link>
              もご覧ください。
            </p>
            <p>
              スキルブログにあります。
              <Link href="/skill/">
                <a className="underline">Skill Blog</a>
              </Link>
              もご覧ください。
            </p>
          </div>

          <dl className={`c_list_contents`}>
            <dt>得意</dt>
            <dd>
              <div>
                <ul>
                  <li className="text-base">JavaScript</li>
                  <li className="text-base">React.js</li>
                  <li className="text-base">Next.js</li>
                </ul>
              </div>
            </dd>
          </dl>
          <dl>
            <div className={`c_list_contents`}>
              <dt>開発時によく使っている</dt>
              <dd>
                <div>
                  <ul>
                    <li className="text-base">TypeScript</li>
                    <li className="text-base">Redux</li>
                    <li className="text-base">redux-toolkit</li>
                    <li className="text-base">tailwindcss</li>
                    <li className="text-base">StoryBook</li>
                  </ul>
                </div>
              </dd>
            </div>
            <div className={`c_list_contents`}>
              <dt>人並みに扱える</dt>
              <dd>
                <div>
                  <ul>
                    <li className="text-base">Jest</li>
                    <li className="text-base">@testing-library</li>
                    <li className="text-base">Cypress</li>
                    <li className="text-base">HTML</li>
                    <li className="text-base">CSS</li>
                    <li className="text-base">SCSS</li>
                  </ul>
                </div>
              </dd>
            </div>
            <div className={`c_list_contents`}>
              <dt>開発環境に使用している</dt>
              <dd>
                <div>
                  <ul>
                    <li className="text-base">webpack</li>
                    <li className="text-base">Github</li>
                  </ul>
                </div>
              </dd>
            </div>
            <div className={`c_list_contents`}>
              <dt>件数は少ないが案件で開発を行なった</dt>
              <dd>
                <div>
                  <ul>
                    <li className="text-base">PHP</li>
                    <li className="text-base">MySQL</li>
                    <li className="text-base">Laravel</li>
                  </ul>
                </div>
              </dd>
            </div>
            <div className={`c_list_contents`}>
              <dt>触ったことがある</dt>
              <dd>
                <div>
                  <ul>
                    <li className="text-base">Python</li>
                  </ul>
                </div>
              </dd>
            </div>
            <div className={`c_list_contents`}>
              <dt>興味があり学習していること</dt>
              <dd>
                <div>
                  <ul>
                    <li className="text-base">React Native</li>
                    <li className="text-base">アーキテクチャ設計</li>
                    <li className="text-base">AWS Amplify</li>
                  </ul>
                </div>
              </dd>
            </div>
          </dl>
          <ProfileChartjs />
        </section>
        <Adsense />
      </div>
    </Layout>
  )
}

export default Index
