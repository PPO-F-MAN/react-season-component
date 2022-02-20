import React from "react";
import * as Styled from "./styled";
import { Season as SeasonProps } from "../../types/common";

const Summer: React.FC<SeasonProps> = ({ children, type = "auto" }) => {
  return (
    <Styled.Container type={type}>
      <div className="ocean">
        <div className="wave"></div>
        <div className="wave"></div>
        <div>{children}</div>
      </div>
    </Styled.Container>
  );
};

export default Summer;
