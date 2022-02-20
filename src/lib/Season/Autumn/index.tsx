import React, { useEffect, useRef } from "react";
import { Season as SeasonProps } from "../../types/common";
import { EffectContainer } from "../styled";
import { falling } from "../utils/falling";

const Autumn: React.FC<SeasonProps> = ({ type = "auto" }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    falling(container);
  }, []);

  return <EffectContainer type={type} ref={containerRef} id="container" />;
};

export default Autumn;
