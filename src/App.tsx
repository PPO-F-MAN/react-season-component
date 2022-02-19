import React from "react";
import styled from "styled-components";
import { Time } from "./lib";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 400px;
  font-size: 150px;
`;

function App() {
  return (
    <Container>
      <Card>
        <Time
          type="day"
          typeChangeTerm={5000}
          animationRoundTime={6}
          animation="right-to-left"
          imagePosition="right-top"
          background={true}
        >
          <Card>넹넹넹</Card>
        </Time>
      </Card>
    </Container>
  );
}

export default App;
