import React, { useEffect, useRef } from "react";
import { Season as SeasonProps } from "../../types/common";
import { AutumnContainer } from "./styled";
import { gsap } from "gsap";

const Autumn: React.FC<SeasonProps> = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    let w = window.innerWidth,
      h = window.innerHeight,
      sizes = ["Small", "Medium", "Large"],
      types = ["round", "star", "real", "sharp", "ring"],
      snowflakes = 50;

    for (let i = 0; i < snowflakes; i++) {
      let snowflakeDiv = document.createElement("div");
      let sizeIndex = Math.ceil(Math.random() * 3) - 1;
      let size = sizes[sizeIndex];
      let typeIndex = Math.ceil(Math.random() * 5) - 1;
      let type = types[typeIndex];

      gsap.set(snowflakeDiv, {
        attr: { class: type + size },
        x: R(0, w),
        y: R(-200, -150),
      });

      container?.appendChild(snowflakeDiv);
      snowing(snowflakeDiv);
    }

    function snowing(element: any) {
      gsap.to(element, R(5, 12), {
        y: h + 100,
        ease: "none",
        repeat: -1,
        delay: -15,
      });

      gsap.to(element, R(4, 8), {
        x: "+=100",
        repeat: -1,
        yoyo: true,
        ease: "sine",
      });

      gsap.to(element, R(2, 8), {
        rotation: R(0, 360),
        repeat: -1,
        yoyo: true,
        ease: "sine",
        delay: -5,
      });
    }

    function R(min: any, max: any) {
      return min + Math.random() * (max - min);
    }
  }, []);

  return <AutumnContainer ref={containerRef} id="container" />;
};

export default Autumn;
