type TimeType = "auto" | "morning" | "day" | "evening" | "night"
type Animation =
  | "left-to-right"
  | "right-to-left"
  | "top-to-bottom"
  | "bottom-to-top"
  | "round"

type ImagePosition =
  | "left-top"
  | "left-center"
  | "left-bottom"
  | "right-top"
  | "right-center"
  | "right-bottom"
  | "center-top"
  | "center-center"
  | "center-bottom"

export interface Time {
  type?: TimeType
  animation?: Animation
  imagePosition?: ImagePosition
  animationRoundTime?: number
  background?: boolean
}
