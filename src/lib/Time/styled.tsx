import styled, { css, keyframes } from "styled-components";

interface ImgPositionProps {
  x: string;
  y: string;
  animation: string;
  duration: number;
  iteration: number;
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
    box-shadow: 0 0 100px 100px white;
  }
  50% {
    transform: translateY(-50%);
    box-shadow: 0 0 100px 50px Rgba(255,244,25,0.3);
  }
  100% {
    transform: translateY(0);
    box-shadow: 0 0 100px 100px white;
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
  transform: translate(0,0);
}
25% {
  opacity: 1;
  transform: translate(100px, -100px);
}
50%{
  opacity: 1;
  transform: translate(250px ,-250px);
}
75%{
  opacity: 1;
  transform: translate(400px, -100px);
}
100% {
  opacity: 0;
  transform: translate(500px, 0);
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
  }
}

const imgPositionStyle = ({ x, y, animation, duration, iteration }: ImgPositionProps) => css`
  position: absolute;
  ${x};
  ${y};
  animation: ${getKeyframes(animation)} ${duration}s infinite linear ${iteration}s;
  width: 50%;
`;

export const Container = styled.div<ContainerProps>`
  background: ${({ background, backgroundGradient }) => (background ? backgroundGradient : "transparent")};
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
