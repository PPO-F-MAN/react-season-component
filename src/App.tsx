import React from "react";
import { Season } from "./lib";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Season type="summer">test</Season>
    </Container>
  );
}

export default App;

// 사용자 중심에서 생각하기

const Container = styled.nav`
  position: relative;
  width: 100%;
  height: 500px;
`;
