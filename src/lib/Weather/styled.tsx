import styled, { css, keyframes } from "styled-components";

export const Container = styled.div<{
  gradient: string;
}>`
  background: ${({ gradient }) => gradient};
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
`;

const drop = (height: string) => keyframes`
  90% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: translateY(${height});
  }
`;

export const Rain = styled.svg<{
  top: number;
  left: number;
  delay: number;
  duration: number;
  pathOpacity: number;
  transformRandom: number;
  parentHeight: string;
}>`
  position: absolute;
  top: calc(${({ top }) => top} * -1px);
  left: calc(${({ left }) => left} * 1%);
  height: 30px;
  animation-delay: calc(${({ delay }) => delay} * 1s);
  animation-duration: calc(${({ duration }) => duration} * 1s);
  animation-name: ${({ parentHeight }) => drop(parentHeight)};
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  & path {
    fill: #a1c6cc;
    opacity: ${({ pathOpacity }) => pathOpacity};
    transform: scaleY(calc(${({ transformRandom }) => transformRandom} * 1.5));
  }
`;

export const Snow = styled.div`
  position: relative;
  height: 100%;
`;

export const Sun = styled.div<{
  imgSrc: string;
}>`
  position: absolute;
  top: 7.13541666667%;
  right: 20.37037037%;
  background: ${({ imgSrc }) => `no-repeat center url(${imgSrc})`};
  background-size: contain;
  width: 10.5729166667%;
  aspect-ratio: 1 / 1;
`;

const slide = keyframes`
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(50%);
  }
`;

export const Infinity = styled.div`
  display: flex;
  position: absolute;
  top: 17.3148148148%;
  right: 0;
  width: 200%;
  animation: ${slide} 20s linear infinite;
`;

export const Cloud = styled.div<{
  imgSrc: string;
}>`
  background: ${({ imgSrc }) => `no-repeat center url(${imgSrc})`};
  background-size: cover;
  width: 91%;
  margin-left: 4.94791666667%;

  &:first-of-type(1) {
    margin-right: 3.958333333%;
  }
  aspect-ratio: 1749 / 250;
`;

export const Sunshine = styled.canvas`
  height: 100%;
  position: relative;
  top: 0;
  left: 0;
  z-index: -11;
  animation: spin 300s linear infinite;
  transform-origin: 50% 50%;
`;

const colorizerCommon = `
  position: absolute;
  width: 300px;
  height: 300px;
  filter: blur(130px);`;

export const Colorizer1 = styled.div`
  ${colorizerCommon}
  border-radius: 50%;
  background: linear-gradient(135deg, #fff, #fff);
`;

export const Colorizer2 = styled.div`
  ${colorizerCommon}
  top: 20%;
  left: 70%;
  background: #fff;
`;

export const Colorizer3 = styled.div`
  ${colorizerCommon}
  top: 80%;
  left: -15%;
  background: #fff;
  filter: blur(80px);
  border-radius: 50%;
`;

export const Colorizer4 = styled.div`
  ${colorizerCommon}
  top: 20%;
  left: 35%;
  width: 100px;
  height: 100px;
  background: #fff;
  filter: blur(80px);
  border-radius: 50%;
`;
