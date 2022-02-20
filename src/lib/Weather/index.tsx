import React, { FC, ReactNode, useState, useRef } from "react";
import { useEffect } from "react";
import { Container } from "./styled";
import Rainy from "./Rainy";
import Snowy from "./Snowy";
import Sunny from "./Sunny";
import Cloudy from "./Cloudy";
import { getAutoType } from "../utils";
import type { Weather as WeatherProps, WeatherType } from "../types";

const cloudyGradient =
  "linear-gradient(179.08deg, #ADFEFF 0.79%, #FCE5F7 101.36%)";
const sunnyGraient = "linear-gradient(180deg, #5DC4FF 0%, #DCFAF8 97.64%)";
const rainyGradient = "linear-gradient(180deg, #0C176D 0%, #88C4D6 100%)";
const snowyGraident = "linear-gradient(180deg, #476F87 0%, #96BBD8 100%)";

const types: WeatherType[] = ["snowy", "sunny", "cloudy", "rainy"];
const map = new Map<WeatherType, boolean>();

const Weather: FC<WeatherProps> = ({
  type = "auto",
  typeChangeTerm = 10000,
  children,
}) => {
  const [refinedType, setRefinedType] = useState(type);
  const [_, setMount] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let setIntervalReference: NodeJS.Timer;

    if (type === "auto") {
      setIntervalReference = setInterval(() => {
        setRefinedType(getAutoType(map, types));
      }, typeChangeTerm);
    }

    return () => {
      clearInterval(setIntervalReference);
    };
  }, []);

  const getBackgroundSrc = () => {
    switch (refinedType) {
      case "cloudy":
        return cloudyGradient;
      case "rainy":
        return rainyGradient;
      case "snowy":
        return snowyGraident;
      default:
        return sunnyGraient;
    }
  };
  const src = getBackgroundSrc();

  const getCanvas = (children: ReactNode) => {
    switch (refinedType) {
      case "rainy":
        return (
          <Rainy
            parentHeight={
              containerRef.current
                ? `${containerRef.current?.clientHeight}px`
                : "100vh"
            }
          >
            {children}
          </Rainy>
        );
      case "snowy":
        return <Snowy>{children}</Snowy>;
      case "cloudy":
        return <Cloudy>{children}</Cloudy>;
      case "sunny":
        return <Sunny>{children}</Sunny>;
      default:
        <>{children}</>;
    }
  };

  // this setMount is used to pass new clientHeight to Rainy
  useEffect(() => {
    setMount(true);
  }, []);

  return (
    <Container ref={containerRef} gradient={src}>
      {getCanvas(children)}
    </Container>
  );
};

export default Weather;
