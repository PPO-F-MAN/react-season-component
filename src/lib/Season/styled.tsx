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
      return;
  }
};
