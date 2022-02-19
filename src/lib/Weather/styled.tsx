import styled, { keyframes } from "styled-components";

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
`;

const drop = keyframes`
  90% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: translateY(100vh);
  }
`;

export const Rain = styled.svg<{
  top: number;
  left: number;
  delay: number;
  duration: number;
  pathOpacity: number;
  transformRandom: number;
}>`
  position: absolute;
  top: calc(${({ top }) => top} * -1px);
  left: calc(${({ left }) => left} * 1%);
  height: 30px;
  animation-delay: calc(${({ delay }) => delay} * 1s);
  animation-duration: calc(${({ duration }) => duration} * 1s);
  animation-name: ${drop};
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
