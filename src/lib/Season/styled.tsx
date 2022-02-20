import styled from "styled-components"
import typeHandler from "./utils/typeHander"

export const SeasonContainer = styled.div<{ type: string }>`
  background: ${({ type }) => typeHandler(type)};
  overflow: hidden;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
