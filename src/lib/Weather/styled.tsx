import styled from "styled-components";

export const Container = styled.div<{
  backgroundSrc: string;
}>`
  background: ${({ backgroundSrc }) =>
    `center no-repeat url(${backgroundSrc})`};
  position: relative;
  height: 100%;
`;
