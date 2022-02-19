import styled, { css, keyframes } from "styled-components"

export const Container = styled.div``

const leftTop = css`
  position: absolute;
  top: 0;
  right: 0;
`

const centerTop = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`

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
`

const rightToleft = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
`

const topToBottom = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(50%);
  }
  100% {
    transform: translateY(0);
  }
`

const bottomToTop = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-50%);
  }
  100% {
    transform: translateY(0);
  }
`
