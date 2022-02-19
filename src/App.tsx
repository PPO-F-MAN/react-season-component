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
  background-color: aliceblue;
`;

function App() {
  return (
    <Container>
      <Card>
        <Time
          type="day"
          typeChangeTerm={5000}
          animationRoundTime={6}
          animation="left-to-right"
          imagePosition="left-top"
          background={true}
        >
          넹넹넹
        </Time>
      </Card>
    </Container>
  );
}

export default App;
