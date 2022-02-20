import React from "react";
import { Season as SeasonProps } from "../../types/common";
import { SummerContainer } from "./styled";

const Summer: React.FC<SeasonProps> = ({ children, type = "auto" }) => {
  return (
    <SummerContainer type={type}>
      <div className="ocean">
        <div className="wave"></div>
        <div className="wave"></div>
        <div>{children}</div>
      </div>
    </SummerContainer>
  );
};

export default Summer;
