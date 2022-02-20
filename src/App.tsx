import React from "react";
import { Season, Time } from "./lib";
import styled from "styled-components";

function App() {
  return (
    <Container>
      {/* <Season>auto</Season> */}
      {/* <Season type="spring">spring</Season> */}
      <Season type="summer">summer</Season>
      {/* <Season type="autumn">autumn</Season>
      <Season type="winter">winter</Season> */}
      <Time background>
        <div>봄</div>
      </Time>
    </Container>
  );
}

export default App;

// 사용자 중심에서 생각하기

const Container = styled.div`
  top: 0;
  left: 0;
  width: 900px;
  height: 600px;
`;
