interface CommonProps {
  typeChangeTerm?: TypeChangeTerm;
  animationRoundTime?: AnimationRoundTime;
  imagePosition?: ImagePosition;
  animation?: Animation;
}

export interface Season extends CommonProps {
  type?: SeasonType;
}

export interface Time extends CommonProps {
  type?: TimeType;
}

export interface Weather extends CommonProps {
  type?: WeatherType;
}

type SeasonType = "auto" | "spring" | "summer" | "autumn" | "winter";
type TimeType = "auto" | "morning" | "day" | "evening" | "night";
type WeatherType = "auto" | "sunny" | "cloudy" | "rainy" | "snowy";

type TypeChangeTerm = number;

type AnimationRoundTime = number;

type ImagePosition = "left-top" | "left-center" | "left-bottom" | "right-top" | "right-center" | "right-bottom" | "center-top" | "center-center" | "center-bottom";

// 감싸준 컴포넌트 기준 50%만 이동하도록 해주세요
type Animation = "left-to-right" | "right-to-left" | "top-to-bottom" | "bottom-to-top";
