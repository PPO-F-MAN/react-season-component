import React from "react";
import styled from "styled-components";
import WeatherTest from "./test/WeatherTest";
import SeasonTest from "./test/SeasonTest";
import TimeTest from "./test/TimeTest";

function App() {
  return (
    <Container>
      {/* <WeatherTest />
      <SeasonTest /> */}
      <TimeTest />
    </Container>
  );
}

export default App;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 150px;
  justify-content: center;
  align-items: center;
  width: 100vw;
  font-family: YUniverse-B;

  @font-face {
    font-family: "YUniverse-B";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_yuniverse@1.0/YUniverse-B.woff2")
      format("woff2");
    font-weight: normal;
    font-style: normal;
  }
`;
