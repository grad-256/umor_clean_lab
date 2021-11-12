import React, { useEffect, Fragment } from 'react'
import Link from 'next/link'
import styles from '@/styles/Home.module.scss'
import Layout from '@/components/Layout'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectOsakaData,
  selectOsakaDate,
  selectOsakaTreatedDate,
  selectOsakaMainDate,
  selectOsakaLastUpdateDate,
  fetchAsyncGetOsakaData,
} from '@/features/osakaCovidSlice'

const Covid = () => {
  const dispatch = useDispatch()
  // const daily = useSelector(selectDaily)
  const dataOsaka = useSelector(selectOsakaData)
  const dateOsaka = useSelector(selectOsakaDate)
  const dateMainSummary = useSelector(selectOsakaMainDate)
  const dateLastUpdate = useSelector(selectOsakaLastUpdateDate)

  useEffect(() => {
    dispatch(fetchAsyncGetOsakaData())
    console.log({ dateMainSummary })
  }, [])

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
          {dateLastUpdate} 時点 大阪集計
          <br />
          {dateMainSummary.attr} / {dateMainSummary.value}
          <div>
            {dateMainSummary.children.map((v, i: number) => {
              return (
                <Fragment key={i}>
                  <div>
                    <p>{v.attr}</p>
                    {v.children.map((v, i: number) => {
                      return (
                        <div key={i}>
                          <p>{v.attr}</p>
                          <p>{v.value}</p>
                        </div>
                      )
                    })}
                    <p>{v.value}</p>
                  </div>
                </Fragment>
              )
            })}
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Covid
