import React from "react";
import { Time } from "../lib";
import * as Styled from "./styled";

function TimeTest() {
  return (
    <Styled.Container>
      <Styled.Title>Time</Styled.Title>
      <Styled.Props>auto, background = true</Styled.Props>
      <Styled.Card>
        <Time background={true} />
      </Styled.Card>

      <Styled.Props>auto, background = false</Styled.Props>
      <Styled.Card>
        <Time background={false} />
      </Styled.Card>

      <Styled.Props>morning, background = true</Styled.Props>
      <Styled.Card>
        <Time type="morning" background={true} animation="bottom-to-top" />
      </Styled.Card>

      <Styled.Props>morning, background = false</Styled.Props>
      <Styled.Card>
        <Time type="morning" background={false} />
      </Styled.Card>

      <Styled.Props>day, background = true</Styled.Props>
      <Styled.Card>
        <Time type="day" background={true} />
      </Styled.Card>

      <Styled.Props>day, background = false</Styled.Props>
      <Styled.Card>
        <Time type="day" background={false} />
      </Styled.Card>

      <Styled.Props>evening, background = true</Styled.Props>
      <Styled.Card>
        <Time type="evening" background={true} />
      </Styled.Card>

      <Styled.Props>evening, background = false</Styled.Props>
      <Styled.Card>
        <Time type="evening" background={false} />
      </Styled.Card>

      <Styled.Props>night, background = true</Styled.Props>
      <Styled.Card>
        <Time type="night" background={true} />
      </Styled.Card>

      <Styled.Props>night, background = false</Styled.Props>
      <Styled.Card>
        <Time type="night" background={false} />
      </Styled.Card>
    </Styled.Container>
  );
}

export default TimeTest;
