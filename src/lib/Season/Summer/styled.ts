import styled from "styled-components";
import { ASSET_SUMMER } from "../constants";

export const SummerContainer = styled.div<{ type: string }>`
  & .ocean {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30em;
  }

  & .wave {
    background: url(${ASSET_SUMMER.wave}) repeat-x;
    position: absolute;
    bottom: 0;
    width: 3000%;
    height: 100%;
    animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
    transform: translateY(60%);
  }

  & .wave:nth-of-type(2) {
    position: absolute;
    animation: wave 7.5s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s infinite,
      7s ease -1.25s infinite;
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
      transform: translate3d(0, 25px, 0);
    }
    50% {
      transform: translate3d(0, 5px, 0);
    }
  }
`;
