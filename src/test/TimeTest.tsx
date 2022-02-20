import React from "react";
import { Time } from "../lib";
import * as Styled from "./styled";

function TimeTest() {
  return (
    <Styled.Container>
      <Styled.Title>Time</Styled.Title>
      <Styled.Props>left-top</Styled.Props>
      <Styled.Card>
        <Time background={true} imagePosition="left-top" animationRoundTime={10} animation="left-to-right" />
      </Styled.Card>

      <Styled.Props>left-top</Styled.Props>
      <Styled.Card>
        <Time background={true} animation="top-to-bottom" imagePosition="left-top" />
      </Styled.Card>

      <Styled.Props>left-center</Styled.Props>
      <Styled.Card>
        <Time background={true} imagePosition="left-center" />
      </Styled.Card>

      <Styled.Props>left-bottom</Styled.Props>
      <Styled.Card>
        <Time background={true} imagePosition="left-bottom" />
      </Styled.Card>

      <Styled.Props>center-top</Styled.Props>
      <Styled.Card>
        <Time background={true} imagePosition="center-top" />
      </Styled.Card>

      <Styled.Props>center-center</Styled.Props>
      <Styled.Card>
        <Time background={true} imagePosition="center-center" />
      </Styled.Card>

      <Styled.Props>center-bottom</Styled.Props>
      <Styled.Card>
        <Time background={true} imagePosition="center-bottom" />
      </Styled.Card>

      <Styled.Props>right-top</Styled.Props>
      <Styled.Card>
        <Time background={true} imagePosition="right-top" />
      </Styled.Card>

      <Styled.Props>right-center</Styled.Props>
      <Styled.Card>
        <Time background={true} imagePosition="right-center" />
      </Styled.Card>

      <Styled.Props>right-bottom</Styled.Props>
      <Styled.Card>
        <Time background={true} animationRoundTime={10} animation="right-to-left" imagePosition="right-bottom" />
      </Styled.Card>
    </Styled.Container>
  );
}

export default TimeTest;
