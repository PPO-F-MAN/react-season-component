import React, { FC } from "react";
import { Rain } from "./styled";
// delay
// duration
// pathOpacity transformRandom
const Rainy: FC = ({ children }) => {
  return (
    <>
      {Array.from({ length: 250 }).map((_, index) => {
        return (
          <Rain
            preserveAspectRatio="xMinYMin"
            viewBox="0 0 5 50"
            key={`$::${index}`}
            top={~~(Math.random() * 100) + 50}
            left={~~(Math.random() * 100)}
            delay={Math.random() * 2 - 1}
            duration={Math.random() * 3}
            pathOpacity={Math.random()}
            transformRandom={Math.random()}
          >
            <path
              stroke="none"
              d="M 2.5,0 C 2.6949458,3.5392017 3.344765,20.524571 4.4494577,30.9559 5.7551357,42.666753 4.5915685,50 2.5,50 0.40843152,50 -0.75513565,42.666753 0.55054234,30.9559 1.655235,20.524571 2.3050542,3.5392017 2.5,0 Z"
            ></path>
          </Rain>
        );
      })}
      {children}
    </>
  );
};

export default Rainy;
