import React, {Component} from 'react'
import {VictoryAxis, VictoryBar, VictoryChart, VictoryLabel, VictoryTooltip} from 'victory'

import numeral from 'numeral'

const CustomLabel = props => {
  const showLabel = props.datum % 2000 ? false : true
  return showLabel ? <VictoryLabel {...props} /> : null
}

const CustomTooltip = props => {
  const {activeBar, datum} = props
  const isBarActive        = datum.x === activeBar

  return (
    <VictoryTooltip
      {...props}
      active={isBarActive}
    />

  )
}

class BasicBarChart extends Component {
  state = {
    activeBar: -1,
  }

  setActiveBar = xValue => {
    this.setState(() => ({
      activeBar: xValue,
    }))
  }

  render() {
    const data = [
      {x: 1, y: 1245},
      {x: 2, y: 3243},
      {x: 3, y: 6754},
      {x: 4, y: 9020},
      {x: 5, y: 2353}
    ]

    const tickValues = [0, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000]

    return (
      <VictoryChart
        domainPadding={20}
        events={[{
          childName    :"all",
          target       : 'data',
          eventHandlers: {
            onClick: (evt, evtData) => {
              this.setActiveBar(evtData.datum.x)

              return [
                {
                  childName: 'xAxis',
                  target   : 'tickLabels',
                  mutation : (props) => {
                    return props.datum === this.state.activeBar ? {style: {fill: 'red'}} : {style: {fill: 'blue'}}
                  }
                }
              ]
            }
          }
        }]}
      >
        <VictoryAxis
          dependentAxis
          style={{
            grid: {
              stroke: d => d % 2000 ? 'transparent' : 'grey'
            }
          }}
          tickLabelComponent={<CustomLabel />}
          tickFormat={t => numeral(t).format(0,0)}
          tickValues={tickValues}
        />

        <VictoryAxis
          name="xAxis"
          independentAxis
          tickFormat={t => Math.floor(t)}
        />

        <VictoryBar
          data={data}
          labels={d => d.y}
          labelComponent={<CustomTooltip activeBar={this.state.activeBar} />}

          style={{
            data: {
              fill: d => d.x === this.state.activeBar ? 'green' : 'blue'
            }
          }}
        />
      </VictoryChart>
    )
  }
}

export default BasicBarChart
