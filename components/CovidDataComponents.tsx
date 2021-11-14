import React, { Fragment } from 'react'

const CovidDataComponents = (props: {
  dateLastUpdate: any
  dateMainSummary: any
}) => {
  const { dateLastUpdate, dateMainSummary } = props
  return (
    <>
      <p className="text-base text-center mt-7">
        {dateLastUpdate} 時点 大阪集計
      </p>
      <p className="text-base text-center mt-3">
        {dateMainSummary.attr} / {dateMainSummary.value}
      </p>
      <div>
        {dateMainSummary.children.map((v, i: number) => {
          return (
            <Fragment key={i}>
              <div>
                <p className="text-base text-center mt-3">
                  {v.attr} / {v.value}
                </p>
                {v.children.map(
                  (v: { attr: string; value: number }, i: number) => {
                    return (
                      <div key={i}>
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
    </>
  )
}

export default CovidDataComponents
