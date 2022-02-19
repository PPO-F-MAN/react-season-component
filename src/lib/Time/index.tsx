import React from "react"
import * as Styled from "./styled"
import { Time as TimeProps } from "../types/common"

const Time: React.FC<TimeProps> = ({
  children,
  type = "auto",
  animationRoundTime = 10000,
  typeChangeTerm = 10000,
  imagePosition,
  animation,
}) => {
  const [x, y] = imagePosition.split("-")
  return (
    <Styled.Container
      x={x}
      y={y}
      animation={animation}
      duration={animationRoundTime}
      iteration={typeChangeTerm}
    >
      {children}
    </Styled.Container>
  )
}

export default Time
