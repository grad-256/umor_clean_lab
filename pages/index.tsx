import React from 'react'
import Layout from '@/components/Layout'
import { Radar } from 'react-chartjs-2'
import Link from 'next/link'
import styles from '@/styles/Home.module.scss'
import Adsense from '@/components/Adsense'

const data = {
  labels: [
    'Next.js',
    'React.js',
    'Nuxt.js',
    'Vue.js',
    'Angular',
    'TailwindCss',
  ],
  datasets: [
    {
      label: '使用経験のあるFW',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      pointRadius: 10,
      pointHitRadius: 10,
      data: [70, 70, 0, 50, 0, 60],
    },
  ],
}

const datag = {
  labels: ['HTML', 'CSS', 'Javascript', 'PHP'],
  datasets: [
    {
      label: '使用経験のある言語',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      pointRadius: 10,
      pointHitRadius: 10,
      data: [80, 80, 80, 50],
    },
  ],
}

const datay = {
  labels: [
    'TypeScript',
    'Redux/redux-toolkit',
    'Jest/@testing-library',
    'SCSS',
    'webpack',
    'Github',
  ],
  datasets: [
    {
      label: '使用経験のある各種ツール',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      pointRadius: 10,
      pointHitRadius: 10,
      data: [70, 70, 60, 50, 50, 50],
    },
  ],
}

const Index: React.FC = () => {
  return (
    <Layout title="Umor Clean Lab" type="website">
      <h1 className={`${styles.c_pages_title}`}>UCLab</h1>
      <section className={`${styles.c_article_main} mt-20`}>
        <h2 className="text-4xl font-bold text-center">- Coding -</h2>
        <div className={`${styles.c_article_hero}`}>
          <img src="/coding.svg" alt="coding" />
        </div>
      </section>

      <div className={`${styles.c_column_detail_wrap} justify-center`}>
        <section
          className={`${styles.c_column_detail} ${styles.c_column_detail_full}`}
        >
          <div className={`${styles.c_column_detail_title} text-center pb-6`}>
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
          <ul className={`${styles.c_column_purpose_list}`}>
            <li>
              IT従事者として社会に貢献し誰かの生活に影響が出ている状態を作るため
            </li>
            <li>
              社会に貢献できるシステムを自分が作る時やそういったシステムを作ろうとしている人の力になるため
            </li>
            <li>誰かのために自分のできることで貢献するため</li>
          </ul>

          <h3 className="text-xl font-bold mt-10">強み・武器</h3>
          <ul className={`${styles.c_column_purpose_list}`}>
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
          <dl className={`${styles.c_list_wrap}`}>
            <div className={`${styles.c_list_contents}`}>
              <dt>得意</dt>
              <dd>
                <div>
                  <ul className={`${styles.c_list}`}>
                    <li>Javascript</li>
                    <li>React.js</li>
                    <li>Next.js</li>
                  </ul>
                </div>
              </dd>
            </div>
            <div className={`${styles.c_list_contents}`}>
              <dt>開発時によく使っている</dt>
              <dd>
                <div>
                  <ul className={`${styles.c_list}`}>
                    <li>TypeScript</li>
                    <li>Redux</li>
                    <li>redux-toolkit</li>
                    <li>TailwindCss</li>
                    <li>StroryBook</li>
                  </ul>
                </div>
              </dd>
            </div>
            <div className={`${styles.c_list_contents}`}>
              <dt>人並みに扱える</dt>
              <dd>
                <div>
                  <ul className={`${styles.c_list}`}>
                    <li>Jest</li>
                    <li>@testing-library</li>
                    <li>Cypress</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>SCSS</li>
                  </ul>
                </div>
              </dd>
            </div>
            <div className={`${styles.c_list_contents}`}>
              <dt>開発環境に使用している</dt>
              <dd>
                <div>
                  <ul className={`${styles.c_list}`}>
                    <li>webpack</li>
                    <li>Github</li>
                  </ul>
                </div>
              </dd>
            </div>
            <div className={`${styles.c_list_contents}`}>
              <dt>件数は少ないが案件で開発を行なった</dt>
              <dd>
                <div>
                  <ul className={`${styles.c_list}`}>
                    <li>PHP</li>
                    <li>MySQL</li>
                    <li>Laravel</li>
                  </ul>
                </div>
              </dd>
            </div>
            <div className={`${styles.c_list_contents}`}>
              <dt>触ったことがある</dt>
              <dd>
                <div>
                  <ul className={`${styles.c_list}`}>
                    <li>Python</li>
                  </ul>
                </div>
              </dd>
            </div>
            <div className={`${styles.c_list_contents}`}>
              <dt>興味があり学習していること</dt>
              <dd>
                <div>
                  <ul className={`${styles.c_list}`}>
                    <li>React Native</li>
                    <li>アーキテクチャ設計</li>
                    <li>AWS</li>
                  </ul>
                </div>
              </dd>
            </div>
          </dl>
          <div className={`${styles.c_area_rader_wrap}`}>
            <div className={`${styles.c_area_radar}`}>
              <Radar
                data={data}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  legend: {
                    display: false,
                  },
                  scales: {
                    r: {
                      angleLines: {
                        display: false,
                      },
                      suggestedMin: 0,
                      suggestedMax: 100,
                    },
                  },
                  scale: {
                    pointLabels: {
                      fontSize: 12,
                    },
                    ticks: {
                      beginAtZero: true,
                      stepSize: 10,
                      max: 10,
                      display: false,
                    },
                  },
                  plugins: {
                    // @ts-ignore
                    datalabels: {
                      display: false,
                    },
                  },
                }}
              />
            </div>
            <div className={`${styles.c_area_radar}`}>
              <Radar
                data={datag}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  legend: {
                    display: false,
                  },
                  scales: {
                    r: {
                      angleLines: {
                        display: false,
                      },
                      suggestedMin: 0,
                      suggestedMax: 100,
                    },
                  },
                  scale: {
                    pointLabels: {
                      fontSize: 12,
                    },
                    ticks: {
                      beginAtZero: true,
                      stepSize: 10,
                      max: 10,
                      display: false,
                    },
                  },
                  plugins: {
                    // @ts-ignore
                    datalabels: {
                      display: false,
                    },
                  },
                }}
              />
            </div>
            <div className={`${styles.c_area_radar}`}>
              <Radar
                data={datay}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  legend: {
                    display: false,
                  },
                  scales: {
                    r: {
                      angleLines: {
                        display: false,
                      },
                      suggestedMin: 0,
                      suggestedMax: 100,
                    },
                  },
                  scale: {
                    pointLabels: {
                      fontSize: 12,
                    },
                    ticks: {
                      beginAtZero: true,
                      stepSize: 10,
                      max: 10,
                      display: false,
                    },
                  },
                  plugins: {
                    // @ts-ignore
                    datalabels: {
                      display: false,
                    },
                  },
                }}
              />
            </div>
          </div>
        </section>
        <Adsense />
      </div>
    </Layout>
  )
}

export default Index
