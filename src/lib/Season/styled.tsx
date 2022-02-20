import styled from "styled-components";
import typeHandler from "./utils/typeHander";
import { ASSET_SPRING, ASSET_AUTUMN, ASSET_WINTER } from "./constants";

export const SeasonContainer = styled.div<{ type: string }>`
  background: ${({ type }) => typeHandler(type)};
  overflow: hidden;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const handleSeasonItem = (type: string) => {
  switch (type) {
    case "spring":
      return ASSET_SPRING;
    case "autumn":
      return ASSET_AUTUMN;
    default:
      return ASSET_WINTER;
  }
};

export const EffectContainer = styled.div<{ type: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 0 10px rgba(#fff, 1));

  & .roundSmall,
  & .roundMedium,
  & .roundLarge {
    border-radius: 50%;
    position: absolute;
    width: 3px;
    height: 3px;
  }
  & .roundMedium {
    width: 4px;
    height: 4px;
  }
  & .roundLarge {
    width: 5px;
    height: 5px;
  }
  & .starSmall,
  & .starMedium,
  & .starLarge {
    position: absolute;
    width: 10px;
    height: 10px;
    background: url(${({ type }) => handleSeasonItem(type).item1});
    background-size: 100% 100%;
  }
  & .starMedium {
    width: 15px;
    height: 15px;
  }
  & .starLarge {
    width: 20px;
    height: 20px;
  }
  & .realSmall,
  & .realMedium,
  & .realLarge {
    position: absolute;
    width: 25px;
    height: 25px;
    background-image: url(${({ type }) => handleSeasonItem(type).item2});
    background-size: 100% 100%;
  }
  & .realMedium {
    width: 30px;
    height: 30px;
  }
  & .realLarge {
    width: 40px;
    height: 40px;
  }
  & .sharpSmall,
  & .sharpMedium,
  & .sharpLarge {
    position: absolute;
    width: 20px;
    height: 20px;
    background-size: 100% 100%;
    background-image: url(${({ type }) => handleSeasonItem(type).item3});
  }
  & .sharpMedium {
    width: 28px;
    height: 28px;
  }
  & .sharpLarge {
    width: 35px;
    height: 35px;
  }
  & .ringSmall,
  & .ringMedium,
  & .ringLarge {
    position: absolute;
    width: 15px;
    height: 15px;
    background-image: url(${({ type }) => handleSeasonItem(type).item4});
    background-size: 100% 100%;
  }
  & .ringMedium {
    width: 25px;
    height: 25px;
  }
  & .ringLarge {
    width: 35px;
    height: 35px;
  }
`;
