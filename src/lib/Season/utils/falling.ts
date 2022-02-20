import { gsap } from "gsap";

export const falling = (container: HTMLDivElement | null) => {
  let w = window.innerWidth,
    h = window.innerHeight,
    sizes = ["Small", "Medium", "Large"],
    types = ["round", "star", "real", "sharp", "ring"],
    particleLength = 50;

  for (let i = 0; i < particleLength; i++) {
    let particleDiv = document.createElement("div");
    let sizeIndex = Math.ceil(Math.random() * 3) - 1;
    let size = sizes[sizeIndex];
    let typeIndex = Math.ceil(Math.random() * 5) - 1;
    let type = types[typeIndex];

    gsap.set(particleDiv, {
      attr: { class: type + size },
      x: R(0, w),
      y: R(-200, -150),
    });

    container?.appendChild(particleDiv);
    fallingItems(particleDiv);
  }

  function fallingItems(element: HTMLDivElement) {
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
};

export const R = (min: number, max: number) => {
  return min + Math.random() * (max - min);
};
