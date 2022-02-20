import React from "react";
import { Weather } from "../lib";
import * as Styled from "./styled";

function WeatherTest() {
  return (
    <Styled.Container>
      <Styled.Title>Weather</Styled.Title>
      <Styled.Props>auto, typeChangeTerm = 10000</Styled.Props>
      <Styled.Card>
        <Weather />
      </Styled.Card>

      <Styled.Props>auto, typeChangeTerm = 5000</Styled.Props>
      <Styled.Card>
        <Weather typeChangeTerm={5000} />
      </Styled.Card>

      <Styled.Props>cloudy</Styled.Props>
      <Styled.Card>
        <Weather type="cloudy" />
      </Styled.Card>

      <Styled.Props>rainy</Styled.Props>
      <Styled.Card>
        <Weather type="rainy" />
      </Styled.Card>

      <Styled.Props>snowy</Styled.Props>
      <Styled.Card>
        <Weather type="snowy" />
      </Styled.Card>

      <Styled.Props>sunny</Styled.Props>
      <Styled.Card>
        <Weather type="sunny" />
      </Styled.Card>
    </Styled.Container>
  );
}

export default WeatherTest;
