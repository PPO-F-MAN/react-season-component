import React, { FC, useEffect } from "react";
import {
  Sunshine,
  Colorizer1,
  Colorizer2,
  Colorizer3,
  Colorizer4,
} from "./styled";
import "./sunny.scss";

const Sunny: FC = ({ children }) => {
  useEffect(() => {
    addSunshine();
  }, []);

  const getRandom = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const addSunshine = () => {
    const canvas: HTMLCanvasElement | null = document.querySelector("canvas");
    let context: CanvasRenderingContext2D | null | undefined =
        canvas?.getContext("2d"),
      stars = 500,
      colorrange = [0, 60, 240];

    appendCircle();

    if (canvas && context) {
      context.canvas.width = window.innerWidth + 300;
      context.canvas.height = window.innerHeight + 300;

      for (let i = 0; i < stars; i++) {
        let x = Math.random() * canvas.offsetWidth,
          y = Math.random() * canvas.offsetHeight,
          radius = Math.random() * 1.5,
          hue = colorrange[getRandom(0, colorrange.length - 1)],
          sat = getRandom(50, 100);
        context.beginPath();
        context.arc(x, y, radius, 0, 360);
        context.fillStyle = "hsl(" + hue + ", " + sat + "%, 88%)";
        context.fill();
      }
    }
  };

  let count = 0;

  const appendCircle = () => {
    const circles: HTMLElement | null = document.querySelector("#circles");
    const circle = document.createElement("div");
    circle.classList.add("circle");

    circles?.append(circle);

    while (count < 200) {
      window.requestAnimationFrame(appendCircle);
      count++;
    }
  };

  return (
    <>
      {children}
      <Sunshine></Sunshine>
      <div>
        <Colorizer1 />
        <Colorizer2 />
        <Colorizer3 />
        <Colorizer4 />
        <div id="circles"></div>
      </div>
    </>
  );
};

export default Sunny;
