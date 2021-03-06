import React, { useEffect, useState } from "react";
import * as Styled from "./styled";
import { Time as TimeProps } from "../types";

const MORNING_GRADIENT = "linear-gradient(90deg, #FFCB87 0%, #FF805D 100%)";
const DAY_GRADIENT = "linear-gradient(270deg, #63B2F4 0%, #BDD4ED 100%)";
const EVENING_GRADIENT = "linear-gradient(90deg, #042D60 0%, #456BD7 101.04%)";
const NIGHT_GRADIENT = "linear-gradient(270deg, #787676 0%, #000000 100%)";

const MORNING_IMAGE =
  "https://github.com/PPO-F-MAN/react-season-component/blob/develop/public/images/morning_icon.png?raw=true";
const DAY_IMAGE =
  "https://github.com/PPO-F-MAN/react-season-component/blob/develop/public/images/day_icon.png?raw=true";
const EVENING_NIGHT_IMAGE =
  "https://github.com/PPO-F-MAN/react-season-component/blob/develop/public/images/night_icon.png?raw=true";

const ONE_MINUTE = 60000;

const Time: React.FC<TimeProps> = ({
  children,
  type = "auto",
  animationRoundTime = 1,
  imagePosition = "left-top",
  animation = "left-to-right",
  background = true,
}) => {
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [currentImage, setCurrentImage] = useState<string>(MORNING_IMAGE);
  const [currentBackground, setCurrentBackground] =
    useState<string>(MORNING_GRADIENT);

  const [x, y] = imagePosition.split("-");

  useEffect(() => {
    setCurrentTime(new Date().getHours());
    setInterval(() => {
      const hour = new Date().getHours();
      setCurrentTime(hour);
    }, ONE_MINUTE);
  }, []);

  useEffect(() => {
    if (type === "auto") {
      if (currentTime <= 6) {
        setCurrentImage(EVENING_NIGHT_IMAGE);
        setCurrentBackground(NIGHT_GRADIENT);
      } else if (currentTime <= 12) {
        setCurrentImage(MORNING_IMAGE);
        setCurrentBackground(MORNING_GRADIENT);
      } else if (currentTime <= 18) {
        setCurrentImage(DAY_IMAGE);
        setCurrentBackground(DAY_GRADIENT);
      } else if (currentTime < 20) {
        setCurrentImage(EVENING_NIGHT_IMAGE);
        setCurrentBackground(EVENING_GRADIENT);
      } else {
        setCurrentImage(EVENING_NIGHT_IMAGE);
        setCurrentBackground(NIGHT_GRADIENT);
      }
    }
  }, [currentTime, type]);

  useEffect(() => {
    switch (type) {
      case "morning":
        setCurrentImage(MORNING_IMAGE);
        setCurrentBackground(MORNING_GRADIENT);
        break;
      case "day":
        setCurrentImage(DAY_IMAGE);
        setCurrentBackground(DAY_GRADIENT);
        break;
      case "evening":
        setCurrentImage(EVENING_NIGHT_IMAGE);
        setCurrentBackground(EVENING_GRADIENT);
        break;
      case "night":
        setCurrentImage(EVENING_NIGHT_IMAGE);
        setCurrentBackground(NIGHT_GRADIENT);
        break;
    }
  }, [type]);

  return (
    <Styled.Container
      backgroundGradient={currentBackground}
      background={background}
    >
      <Styled.Image
        src={currentImage}
        draggable={false}
        x={getX(x)}
        y={getY(y)}
        animation={animation}
        duration={animationRoundTime}
      />
      <Styled.Children>{children}</Styled.Children>
    </Styled.Container>
  );
};

export default Time;

function getX(x: string) {
  switch (x) {
    case "left":
      return "left : -10%;";
    case "right":
      return "right : -10%;";
    case "center":
      return "left : 17%; transform : translateX(-50%);";
  }
  return "";
}

function getY(y: string) {
  switch (y) {
    case "top":
      return "top : -10%;";
    case "bottom":
      return "bottom : -10%;";
    case "center":
      return "top : 17%; transform : translateY(-50%);";
  }
  return "";
}
