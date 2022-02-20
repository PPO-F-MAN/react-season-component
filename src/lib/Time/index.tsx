import React, { useEffect, useState } from "react";
import * as Styled from "./styled";
import { Time as TimeProps } from "../types/common";

const MORNING_GRADIENT = "linear-gradient(90deg, #FFCB87 0%, #FF805D 100%)";
const DAY_GRADIENT = "linear-gradient(270deg, #63B2F4 0%, #BDD4ED 100%)";
const EVENING_GRADIENT = "linear-gradient(90deg, #042D60 0%, #456BD7 101.04%)";
const NIGHT_GRADIENT = "linear-gradient(270deg, #787676 0%, #000000 100%)";

const MORNING_IMAGE = "/images/morning_icon.png";
const DAY_IMAGE = "/images/day_icon.png";
const EVENING_NIGHT_IMAGE = "/images/night_icon.png";

const Time: React.FC<TimeProps> = ({
  children,
  type = "auto",
  animationRoundTime = 10,
  typeChangeTerm = 10,
  imagePosition = "left-top",
  animation = "left-to-right",
  background,
}) => {
  const [currentType, setCurrentType] = useState<string>(type);
  const [currentImage, setCurrentImage] = useState<string>(MORNING_IMAGE);
  const [currentBackground, setCurrentBackground] =
    useState<string>(MORNING_GRADIENT);

  const [x, y] = imagePosition.split("-");

  useEffect(() => {
    const date = new Date().getHours();
    if (type === "auto") {
      if (date <= 6) {
        setCurrentType("night");
      } else if (date <= 12) {
        setCurrentType("morning");
      } else if (date <= 18) {
        setCurrentType("day");
      } else if (date < 20) {
        setCurrentType("evening");
      } else {
        setCurrentType("night");
      }
    }
  }, [type]);

  useEffect(() => {
    switch (currentType) {
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
  }, [currentType]);

  return (
    <Styled.Container
      backgroundGradient={currentBackground}
      background={background}
    >
      <Styled.Image
        src={currentImage}
        x={getX(x)}
        y={getY(y)}
        animation={animation}
        duration={animationRoundTime}
        iteration={typeChangeTerm}
      />
      <Styled.Children>{children}</Styled.Children>
    </Styled.Container>
  );
};

export default Time;

function getX(x: string) {
  switch (x) {
    case "left":
      return "left : 0;";
    case "right":
      return "right : 0;";
    case "center":
      return "left : 50%; transform : translateX(-50%);";
  }
  return "";
}

function getY(y: string) {
  switch (y) {
    case "top":
      return "top : 0;";
    case "bottom":
      return "bottom : 0;";
    case "center":
      return "top : 50%; transform : translateY(-50%);";
  }
  return "";
}
