import React, { Fragment } from 'react'
import PieChart from '@/components/PieChart'
import styles from '@/styles/Home.module.scss'

const CovidDataComponents = (props: {
  dateLastUpdate: any
  dateMainSummary: any
}) => {
  const { dateLastUpdate, dateMainSummary } = props
  return (
    <>
      <p className="text-base mt-7">
        <span className="text-xl">{dateLastUpdate}</span> 時点集計
      </p>
      <p className="text-base mt-3">
        {dateMainSummary.attr} / {dateMainSummary.value}
      </p>

      <div className={`${styles.c_covid_data_list}`}>
        {dateMainSummary.children.map((v, i: number) => {
          return (
            <Fragment key={i}>
              <p className="text-base text-center mt-3">
                {v.attr} / {v.value}
              </p>

              <div className={`${styles.c_covid_data_card_list}`}>
                {v.children.map(
                  (v: { attr: string; value: number }, i: number) => {
                    return (
                      <div key={i} className={`${styles.c_covid_data_card}`}>
                        <p className="text-base">{v.attr}</p>
                        <p className="text-base">{v.value}</p>
                      </div>
                    )
                  }
                )}
              </div>
            </Fragment>
          )
        })}
      </div>
      <PieChart />
    </>
  )
}

export default CovidDataComponents
