// 애니메이션 지속시간
// type이 auto일 때 받습니다.
export type AnimationDuration = number;

// 아이콘의 위치
export type AnimationLocation =
  | "left-top"
  | "left-center"
  | "left-bottom"
  | "right-top"
  | "right-center"
  | "right-bottom"
  | "center-top"
  | "center-center"
  | "center-bottom";

// 아이콘의 이동 경로
// 감싸준 컴포넌트 기준 50%만 이동하도록 해주세요
export type Animation =
  | "left-to-right"
  | "right-to-left"
  | "top-to-bottom"
  | "bottom-to-top";
