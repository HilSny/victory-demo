import {VictoryAxis, VictoryBar, VictoryChart} from 'victory'

import React from 'react'
import numeral from 'numeral'

const BasicBarChart = () => {
  const data = [
    {x: 1, y: 1245},
    {x: 2, y: 3243},
    {x: 3, y: 6754},
    {x: 4, y: 9020},
    {x: 5, y: 2353}
  ]

  const tickValues = [0, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000]

  return (
    <VictoryChart domainPadding={20}>
      <VictoryAxis
        independentAxis
        style={{
          grid: {
            stroke: 'gray',
          }
        }}
        tickFormat={t => numeral(t).format(0,0)}
        tickValues={tickValues}
      />

      <VictoryAxis
        dependentAxis
        tickFormat={t => Math.floor(t)}
      />

      <VictoryBar
        horizontal
        data={data}
      />
    </VictoryChart>
  )
}

export default BasicBarChart
