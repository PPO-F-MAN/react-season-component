import React from "react";
import * as Styled from "./styled";

interface SeasonProps {
  animation: string;
}

const Season: React.FC<SeasonProps> = ({ children, animation }) => {
  return (
    <Styled.Container>
      {animation}
      {children}
    </Styled.Container>
  );
};

export default Season;
