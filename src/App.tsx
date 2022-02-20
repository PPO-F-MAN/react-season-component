import React from "react";
import { Season } from "./lib";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Season type="spring">
        <div>봄</div>
      </Season>
      <Season type="summer">
        <div>여름</div>
      </Season>
      <Season type="autumn">
        <div>가을</div>
      </Season>
      <Season type="winter">
        <div>겨울</div>
      </Season>
    </Container>
  );
}

export default App;

// 사용자 중심에서 생각하기

const Container = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 200px;
`;
