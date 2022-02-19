interface CommonProps {
  typeChangeTerm?: TypeChangeTerm;
  imagePosition?: ImagePosition;
  animation?: Animation;
}

export interface Season extends CommonProps {
  type: SeasonType;
}

export interface Time extends CommonProps {
  type: TimeType;
}

export interface Weather extends CommonProps {
  type: WeatherType;
}

type SeasonType = "spring" | "summer" | "autumn" | "winter";
type TimeType = "morning" | "day" | "evening" | "night";
type WeatherType = "sunny" | "cloudy" | "rainy" | "snowy";

type TypeChangeTerm = number;

type ImagePosition =
  | "left-top"
  | "left-center"
  | "left-bottom"
  | "right-top"
  | "right-center"
  | "right-bottom"
  | "center-top"
  | "center-center"
  | "center-bottom";

// 감싸준 컴포넌트 기준 50%만 이동하도록 해주세요
type Animation =
  | "left-to-right"
  | "right-to-left"
  | "top-to-bottom"
  | "bottom-to-top";
