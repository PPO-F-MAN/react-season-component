import React, { FC, useState } from "react";
import { useEffect } from "react";
import { Container } from "./styled";
import type { CommonComponentProps } from "../types";
const cloudyBg = "/asset/weather/cloudy/Cloudy.svg";
const sunnyBg = "/asset/weather/sunny/Sunny.svg";
const rainyBg = "/asset/weather/rainy/Rainy.svg";
const snowyBg = "/asset/weather/snowy/Snowy.svg";

type WeatherType = "auto" | "sunny" | "cloudy" | "rainy" | "snowy";

interface WeatherProps extends CommonComponentProps {
  type?: WeatherType;
}

const types: WeatherType[] = ["snowy", "sunny", "cloudy", "rainy"];

const map = new Map<WeatherType, boolean>();

/**
 *
 * @desc type auto일 때, 일정 시간 지난 이후에 보여줄 타입 결정
 */
const getAutoType = (typeArray: typeof types) => {
  if (map.size === types.length) {
    map.clear();
  }

  let index = ~~(Math.random() * 4);

  while (map.has(typeArray[index])) {
    index = ~~(Math.random() * 4);
  }

  map.set(typeArray[index], true);
  return typeArray[index];
};

const Weather: FC<WeatherProps> = ({ type = "auto", animationDuration }) => {
  const [refinedType, setRefinedType] = useState(type);

  useEffect(() => {
    let setIntervalReference: NodeJS.Timer;

    if (type === "auto") {
      setIntervalReference = setInterval(() => {
        setRefinedType(getAutoType(types));
      }, animationDuration);
    }

    return () => {
      clearInterval(setIntervalReference);
    };
  }, []);

  const getBackgroundSrc = () => {
    switch (refinedType) {
      case "cloudy":
        return cloudyBg;
      case "rainy":
        return rainyBg;
      case "snowy":
        return snowyBg;
      default:
        return sunnyBg;
    }
  };
  const src = getBackgroundSrc();

  return (
    //getBackgroundSrc()
    <Container backgroundSrc={sunnyBg}>{refinedType}</Container>
  );
};

export default Weather;
