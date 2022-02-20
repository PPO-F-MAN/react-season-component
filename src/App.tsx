import React from "react"
import styled from "styled-components"
import { Time } from "./lib"

function App() {
  return (
    <Container>
      <Time
        type="day"
        animationRoundTime={10}
        imagePosition="left-bottom"
        animation="left-to-right"
        background={true}
      />
    </Container>
  )
}

export default App

// 사용자 중심에서 생각하기

const Container = styled.div`
  margin: 100px;
  width: 400px;
  height: 400px;
`
