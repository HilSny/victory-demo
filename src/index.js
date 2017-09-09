import React, { Component } from 'react'

import BasicBarChart from './BasicBarChart'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const CenterDiv = styled.div`
  flex           : 1;
  align-items    : center;
  justify-content: center;
`
class App extends Component {
  render() {
    return (
      <CenterDiv>
        <BasicBarChart />
      </CenterDiv>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
