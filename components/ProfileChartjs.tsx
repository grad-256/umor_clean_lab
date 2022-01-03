import React from 'react'
import { Radar } from 'react-chartjs-2'

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

const ProfileChartjs = () => {
  return (
    <div className="flex flex-wrap c_area_rader_wrap">
      <div
        className={`pb-5 mt-10 border-b-[1px] border-solid border-[#00aa6e] odd:mr-[2rem] maxonlylg:odd:mr-0`}
      >
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
      <div
        className={`pb-5 mt-10 border-b-[1px] border-solid border-[#00aa6e] odd:mr-[2rem] maxonlylg:odd:mr-0`}
      >
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
      <div
        className={`pb-5 mt-10 border-b-[1px] border-solid border-[#00aa6e] odd:mr-[2rem] maxonlylg:odd:mr-0`}
      >
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
  )
}

export default ProfileChartjs
