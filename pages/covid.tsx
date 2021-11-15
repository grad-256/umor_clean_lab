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
import CovidDataComponents from '@/components/CovidDataComponents'

const Covid: React.FC = () => {
  const dispatch = useDispatch()
  // const daily = useSelector(selectDaily)
  const dataOsaka = useSelector(selectOsakaData)
  const dateOsaka = useSelector(selectOsakaDate)
  const dateMainSummary = useSelector(selectOsakaMainDate)
  const dateLastUpdate = useSelector(selectOsakaLastUpdateDate)

  useEffect(() => {
    dispatch(fetchAsyncGetOsakaData())
  }, [dispatch])

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
            <h2 className="text-3xl font-bold">大阪 コロナ感染陽性者の内訳</h2>
          </div>
          <CovidDataComponents
            dateMainSummary={dateMainSummary}
            dateLastUpdate={dateLastUpdate}
          />
        </section>
      </div>
    </Layout>
  )
}

export default Covid
