import React, { FC, useEffect } from "react";
import { Snow } from "./styled";
import "./snowy.css";

const Snowy: FC = ({ children }) => {
  useEffect(() => {
    addSnow();
  }, []);

  let count = 0;

  const addSnow = () => {
    const wrapper: HTMLElement | null = document.querySelector("#snow-wrapper");
    const snow = document.createElement("span");
    snow.classList.add("snow");
    snow.style.left = `${Math.random() * (window.innerWidth - 1) + 1}px`;
    snow.style.animationDuration = `${Math.random() * (20 - 8) + 8}s`;
    snow.style.animationDelay = `${Math.random() * (10 - 1) + 1}s`;
    snow.style.opacity = `${Math.random()}`;

    wrapper?.append(snow);

    if (count < 250) {
      window.requestAnimationFrame(addSnow);
      count++;
    }
  };

  return <Snow id="snow-wrapper">{children}</Snow>;
};

export default Snowy;
