import React from "react"
import { Season as SeasonProps } from "../types/common"
import Summer from "./Summer"
import { SeasonContainer } from "./styled"

const Season: React.FC<SeasonProps> = ({
  children,
  type = "auto",
  typeChangeTerm = 10000,
  imagePosition,
  animation,
}) => {
  const getSeason = () => {
    let mon = new Date().getMonth() + 1

    if (3 <= mon && mon <= 5) {
      return "spring"
    } else if (6 <= mon && mon <= 8) {
      return "summer"
    } else if (9 <= mon && mon <= 11) {
      return "autumn"
    } else {
      return "winter"
    }
  }

  const handleSeasonType = (type: string) => {
    if (type === "auto") {
      type = getSeason()
    }
    console.log(type)
    switch (type) {
      case "spring":
        return <Summer type="summer" />
      case "summer":
        return <Summer type="summer" />
      case "autumn":
        return <Summer type="summer" />
      case "winter":
        return <Summer type="summer" />
    }
  }

  return <SeasonContainer type={type}>{handleSeasonType(type)}</SeasonContainer>
}

export default Season
