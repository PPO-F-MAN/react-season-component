import styled, { css, keyframes } from "styled-components";

interface ImgPositionProps {
  x: string;
  y: string;
  animation: string;
  duration: number;
}

interface ContainerProps {
  background: boolean;
  backgroundGradient: string;
}

const leftToRight = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(50%);
  }
  100% {
    transform: translateX(0);
  }
`;

const rightToLeft = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
`;

const topToBottom = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-50%);
  }
  100% {
    transform: translateY(0);
  }
`;

const bottomToTop = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(50%);
  }
  100% {
    transform: translateY(0);
  }
`;

const round = keyframes`
0% {
  opacity: 0;
  top : 0;
  left: 0;
}
25% {
  opacity: 1;
  top : -30%;
  left: 10%;
}
50%{
  opacity: 1;
  top : -40%;
  left: 30%;
}
75%{
  opacity: 1;
  top : -35%;
  left: 45%;
}
100% {
  opacity: 1;
  top : -30%;
  left: 50%;
}
`;

function getKeyframes(param: string) {
  switch (param) {
    case "left-to-right":
      return leftToRight;
    case "right-to-left":
      return rightToLeft;
    case "top-to-bottom":
      return topToBottom;
    case "bottom-to-top":
      return bottomToTop;
    default:
      return round;
  }
}

const imgPositionStyle = ({
  x,
  y,
  animation,
  duration,
}: ImgPositionProps) => css`
  position: absolute;
  ${x};
  ${y};
  animation: ${duration}s ${animation === 'round' ? 'linear' : 'ease'} infinite ${getKeyframes(animation)};
  width: 50%;
`;

export const Container = styled.div<ContainerProps>`
  background: ${({ background, backgroundGradient }) =>
    background ? backgroundGradient : "transparent"};
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
`;

export const Image = styled.img`
  ${imgPositionStyle};
`;

export const Children = styled.div`
  z-index: 100;
`;
