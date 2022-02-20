import { SPRING, SUMMER, AUTUMN, WINTER } from "../constants";

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

export default typeHandler;