import React, { useState, useEffect } from 'react'
import { Doughnut, Line, Bar } from 'react-chartjs-2'
import { useSelector } from 'react-redux'
import { selectOsakaMainDate } from '../features/osakaCovidSlice'

type MAINSUMMARYTYPE = {
  attr: string[]
  value: number[]
}

const PieChart: React.FC = () => {
  const mainSummary = useSelector(selectOsakaMainDate)
  const [MainState, setMainState] = useState<MAINSUMMARYTYPE>()

  useEffect(() => {
    const attr = mainSummary.children.map((v) => v.children.map((v) => v.attr))
    const value = mainSummary.children.map((v) =>
      v.children.map((v) => v.value)
    )

    setMainState({ attr: attr[0], value: value[0] })
  }, [mainSummary])

  const lineChart = MainState && (
    <Bar
      data={{
        labels: MainState.attr,
        datasets: [
          {
            data: MainState.value,
            label: '大阪のコロナ陽性患者数の内訳',
          },
        ],
      }}
    />
  )

  const pieChart = MainState && (
    <Doughnut
      data={{
        labels: MainState.attr,
        datasets: [
          {
            data: MainState.value,
            backgroundColor: [
              'rgba(0, 0, 255, 1)',
              '#36A2EB',
              'rgba(0, 255, 0, 1)',
              '#e0e0e0',
              'rgba(255, 0, 0, 1)',
              'rgba(0, 0, 0, 1)',
              '#FF6384',
              '#3cb371',
            ],
            hoverBackgroundColor: ['#36A2EB', '#3cb371', '#e0e0e0', '#FF6384'],
            borderColor: [
              'transparent',
              'transparent',
              'transparent',
              'transparent',
              'transparent',
              'transparent',
              'transparent',
              'transparent',
            ],
          },
        ],
      }}
      options={{
        // @ts-ignore
        legend: {
          position: 'bottom',
          labels: {
            boxWidth: 15,
          },
        },
      }}
    />
  )

  return (
    <>
      <section>
        <h3>円グラフ</h3>
        <div className="mt-7">{pieChart}</div>
      </section>
      <section>
        <h3>棒グラフ</h3>
        <div className="mt-7">{lineChart}</div>
      </section>
    </>
  )
}

export default PieChart
