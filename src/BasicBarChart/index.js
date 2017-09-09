import {VictoryAxis, VictoryBar, VictoryChart} from 'victory'

import React from 'react'

const BasicBarChart = () => {
  const data = [
    {x: 1, y: 1245},
    {x: 2, y: 3243},
    {x: 3, y: 6754},
    {x: 4, y: 9020},
    {x: 5, y: 2353}
  ]
  return (
    <VictoryChart domainPadding={20}>
      <VictoryAxis
        independentAxis
        tickFormat={t => Math.floor(t)}
      />

      <VictoryAxis
        dependentAxis
      />

      <VictoryBar
        data={data}
      />
    </VictoryChart>
  )
}

export default BasicBarChart
