import React from "react"
import * as Styled from "./styled"
import { Season as SeasonProps } from "../types/common"

const Season: React.FC<SeasonProps> = ({
  children,
  type = "auto",
  typeChangeTerm = 10000,
  imagePosition,
  animation,
}) => {
  return <Styled.Container>{children}</Styled.Container>
}

export default Season
