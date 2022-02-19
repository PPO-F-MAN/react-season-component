import React from "react";
import * as Styled from "./styled";
import { Season as SeasonProps } from "../types/common";

const Season: React.FC<SeasonProps> = ({
  children,
  type,
  typeChangeTerm,
  imagePosition,
  animation,
}) => {
  return <Styled.Container type={type}>{children}</Styled.Container>;
};

export default Season;
