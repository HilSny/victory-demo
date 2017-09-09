import {VictoryAxis, VictoryBar, VictoryChart, VictoryLabel} from 'victory'

import React from 'react'
import numeral from 'numeral'

const CustomVictoryLabel = props => {
  const showLabel = props.datum % 2000 ? false : true
  return showLabel ? <VictoryLabel {...props} /> : null
}

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
        dependentAxis
        style={{
          grid: {
            stroke: d => d % 2000 ? 'transparent' : 'grey'
          }
        }}
        tickLabelComponent={<CustomVictoryLabel />}
        tickFormat={t => numeral(t).format(0,0)}
        tickValues={tickValues}
      />

      <VictoryAxis
        independentAxis
        tickFormat={t => Math.floor(t)}
      />

      <VictoryBar
        data={data}
        events={[{
          target: 'data',
          eventHandlers: {
            onClick: () => {
              return [
                {
                  target: 'data',
                  mutation: props => {
                    const fill = props.style.fill
                    return fill === 'blue' ? {style: {fill: 'green'}} : {style: {fill: 'blue'}}
                  }
                },

                {
                  target: 'labels',
                  mutation: props => {
                    return props.text ? null : {text: 'clicked'}
                  }
                }
              ]
            }
          }
        }]}
        style={{
          data: {
            fill: 'blue'
          }
        }}
      />
    </VictoryChart>
  )
}

export default BasicBarChart
