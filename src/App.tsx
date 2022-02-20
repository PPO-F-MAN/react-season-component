import React from "react"
import { Time } from "./lib"
import styled from "styled-components"

function App() {
  return (
    <Container>
      <Time background>
        <div>봄</div>
      </Time>
    </Container>
  )
}

export default App

// 사용자 중심에서 생각하기

const Container = styled.div`
  top: 0;
  left: 0;
  width: 300px;
  height: 200px;
`
