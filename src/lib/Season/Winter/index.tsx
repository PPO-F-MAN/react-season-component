import React, { useEffect, useRef } from "react";
import { Season as SeasonProps } from "../../types/common";
import { WinterContainer } from "./styled";
import { gsap } from "gsap";

const Winter: React.FC<SeasonProps> = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    var w = window.innerWidth,
      h = window.innerHeight,
      // container = document.getElementById("container"),

      sizes = ["Small", "Medium", "Large"],
      types = ["round", "star", "real", "sharp", "ring"],
      snowflakes = 50;

    for (var i = 0; i < snowflakes; i++) {
      var snowflakeDiv = document.createElement("div");
      var sizeIndex = Math.ceil(Math.random() * 3) - 1; //get random number between 0 and 2
      var size = sizes[sizeIndex]; //get random size
      var typeIndex = Math.ceil(Math.random() * 5) - 1;
      var type = types[typeIndex];
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

  return <WinterContainer ref={containerRef} id="container" />;
};

export default Winter;
