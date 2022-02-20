import { WeatherType } from "../types";

/**
 * @desc type auto일 때, 일정 시간 지난 이후에 보여줄 타입 결정
 */
export const getAutoType = (
  map: Map<WeatherType, boolean>,
  typeArray: WeatherType[]
) => {
  if (map.size === typeArray.length) {
    map.clear();
  }

  let index = ~~(Math.random() * 4);

  while (map.has(typeArray[index])) {
    index = ~~(Math.random() * 4);
  }

  map.set(typeArray[index], true);
  return typeArray[index];
};
