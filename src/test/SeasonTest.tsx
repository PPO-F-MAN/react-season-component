import React from "react";
import { Season } from "../lib";
import * as Styled from "./styled";

function SeasonTest() {
  return (
    <Styled.Container>
      <Styled.Title>Season</Styled.Title>
      <Styled.Props>auto</Styled.Props>
      <Styled.Card>
        <Season />
      </Styled.Card>
    </Styled.Container>
  );
}

export default SeasonTest;
