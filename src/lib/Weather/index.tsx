import React from "react";
import * as Styled from "./styled";
import { Weather as WeatherProps } from "../types/common";

const Weather: React.FC<WeatherProps> = ({
  children,
  type = "auto",
  animationRoundTime = 10000,
  typeChangeTerm = 10000,
  imagePosition,
  animation,
}) => {
  return <Styled.Container>{children}</Styled.Container>;
};

export default Weather;
