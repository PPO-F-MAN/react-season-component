import React from "react";
import { Season } from "./lib";
import styled from "styled-components";
import { Weather } from "./lib";
import Sunny from "./lib/Weather/Sunny";
import Snowy from "./lib/Weather/Snowy";
import Rainy from "./lib/Weather/Rainy";
import Cloudy from "./lib/Weather/Cloudy";

function App() {
  return (
    <Container>
      <Season type="spring">test</Season>
      {/* <Sunny />
      <Snowy />
      {/* <Rainy /> */}
    </Container>
  );
}

export default App;

// 사용자 중심에서 생각하기

const Container = styled.div`
top: 0;
left: 0;
width: 100px;
height: 100px;
`;
