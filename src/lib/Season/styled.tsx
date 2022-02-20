import styled from "styled-components";
import { SPRING, SUMMER, AUTUMN, WINTER } from "./constants";

export const Container = styled.div<{ type: string }>`
  background: ${({ type }) => typeHandler(type)};
  overflow: hidden;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  & .ocean {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  & .wave {
    background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/wave.svg)
      repeat-x;
    position: absolute;
    bottom: 0;
    width: 3000%;
    height: 100%;
    animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
    transform: translateY(60%);
  }

  & .wave:nth-of-type(2) {
    position: absolute;
    bottom: -70%;
    animation: wave 5s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s infinite,
      swell 7s ease -1.25s infinite;
    opacity: 1;
  }

  @keyframes wave {
    0% {
      margin-left: 0;
    }
    100% {
      margin-left: -1600px;
    }
  }

  @keyframes swell {
    0%,
    100% {
      transform: translate3d(0, -25px, 0);
    }
    50% {
      transform: translate3d(0, 5px, 0);
    }
  }
`;

const typeHandler = (type: string) => {
  switch (type) {
    case "spring":
      return SPRING;
    case "summer":
      return SUMMER;
    case "autumn":
      return AUTUMN;
    case "winter":
      return WINTER;
    default:
      return getSeason();
  }
};

const getSeason = () => {
  let mon = new Date().getMonth() + 1;

  if (mon === 12 || mon === 1 || mon === 2) {
    return WINTER;
  } else if (mon === 3 || mon === 4 || mon === 5) {
    return SPRING;
  } else if (mon === 6 || mon === 7 || mon === 8) {
    return SUMMER;
  } else {
    return AUTUMN;
  }
};
