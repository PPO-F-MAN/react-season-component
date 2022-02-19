import React, { FC, ReactNode, useState } from "react"
import { useEffect } from "react"
import { Container } from "./styled"
import Rainy from "./Rainy"
import Snowy from "./Snowy"

import type { Weather as WeatherProps } from "../types"

const cloudyGradient =
  "linear-gradient(179.08deg, #ADFEFF 0.79%, #FCE5F7 101.36%)"
const sunnyGraient = "linear-gradient(180deg, #5DC4FF 0%, #DCFAF8 97.64%)"
const rainyGradient = "linear-gradient(180deg, #0C176D 0%, #88C4D6 100%)"
const snowyGraident = "linear-gradient(180deg, #476F87 0%, #96BBD8 100%)"

type WeatherType = "auto" | "sunny" | "cloudy" | "rainy" | "snowy"

const types: WeatherType[] = ["snowy", "sunny", "cloudy", "rainy"]
const map = new Map<WeatherType, boolean>()

/**
 *
 * @desc type auto일 때, 일정 시간 지난 이후에 보여줄 타입 결정
 */
const getAutoType = (typeArray: typeof types) => {
  if (map.size === types.length) {
    map.clear()
  }

  let index = ~~(Math.random() * 4)

  while (map.has(typeArray[index])) {
    index = ~~(Math.random() * 4)
  }

  map.set(typeArray[index], true)
  return typeArray[index]
}

const Weather: FC<WeatherProps> = ({
  type = "auto",
  typeChangeTerm = 10000,
  children,
}) => {
  const [refinedType, setRefinedType] = useState(type)

  useEffect(() => {
    let setIntervalReference: NodeJS.Timer

    if (type === "auto") {
      setIntervalReference = setInterval(() => {
        setRefinedType(getAutoType(types))
      }, typeChangeTerm)
    }

    return () => {
      clearInterval(setIntervalReference)
    }
  }, [])

  const getBackgroundSrc = () => {
    switch (refinedType) {
      case "cloudy":
        return cloudyGradient
      case "rainy":
        return rainyGradient
      case "snowy":
        return snowyGraident
      default:
        return sunnyGraient
    }
  }
  const src = getBackgroundSrc()

  const getCanvas = (children: ReactNode) => {
    switch (refinedType) {
      case "rainy":
        return <Rainy>{children}</Rainy>
      case "snowy":
        return <Snowy>{children}</Snowy>
      default:
        ;<>{children}</>
    }
  }

  return <Container gradient={src}>{getCanvas(children)}</Container>
}

export default Weather
