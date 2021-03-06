import React from "react";
import { Season as SeasonProps } from "../../types/common";
import { SummerContainer } from "./styled";

const Summer: React.FC<SeasonProps> = ({ children, type = "auto" }) => {
  return (
    <SummerContainer type={type}>
      <div className="ocean">
        <div className="wave" />
        <div className="wave" />
        {children}
      </div>
    </SummerContainer>
  );
};

export default Summer;
