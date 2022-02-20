import React, { useEffect, useRef } from "react";
import { Season as SeasonProps } from "../../types/common";
import { falling } from "../utils/falling";
import { EffectContainer } from "../styled";

const Winter: React.FC<SeasonProps> = ({ type = "auto" }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    falling(container);
  }, []);

  return <EffectContainer type={type} ref={containerRef} id="container" />;
};

export default Winter;
