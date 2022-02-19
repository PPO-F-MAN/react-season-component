import styled from "styled-components"
import { Time } from "./lib"

export const Exam = () => {
  return (
    <ExamContainer>
      <Time
        type="day"
        typeChangeTerm={5000}
        animationRoundTime={3}
        animation="left-to-right"
        imagePosition="left-top"
      >
        hi
      </Time>
    </ExamContainer>
  )
}

const ExamContainer = styled.section`
  display: inline-block;
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: aquamarine;
`
