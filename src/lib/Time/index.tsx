import React from "react"
import * as Styled from "./styled"
import { Time as TimeProps } from "../types/common"

const Time: React.FC<TimeProps> = ({
  children,
  type = "auto",
  animationRoundTime,
  typeChangeTerm = 10000,
  imagePosition,
  animation,
}) => {
  return <Styled.Container>{children}</Styled.Container>
}

export default Time
