import React from "react"
import styled from "styled-components"
import { Time } from "./lib"

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  font-size: 10px;
`

function App() {
  return (
    <Container>
      <Card>
        <Time
          type="auto"
          typeChangeTerm={100}
          animationRoundTime={6}
          animation="top-to-bottom"
          imagePosition="right-top"
          background={true}
        >
          <Card>하하하</Card>
        </Time>
      </Card>
    </Container>
  )
}

export default App
