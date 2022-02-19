import styled from "styled-components";
import { SPRING, SUMMER, AUTUMN, WINTER } from "./constants";

export const Container = styled.div<{ type: string }>`
  background: ${({ type }) => typeHandler(type)};
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
