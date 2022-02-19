import React from "react";
import * as Styled from "./styled";
import { Weather as WeatherProps } from "../types/common";

const Weather: React.FC<WeatherProps> = ({
  children,
  type,
  typeChangeTerm,
  imagePosition,
  animation,
}) => {
  return <Styled.Container>{children}</Styled.Container>;
};

export default Weather;
