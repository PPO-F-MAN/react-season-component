import React, { FC } from "react";
import { Sun, Cloud, Infinity } from "./styled";
const sun = "/asset/weather/cloudy/sun.png";
const cloud = "/asset/weather/cloudy/cloud.png";

const Cloudy: FC = ({ children }) => {
  return (
    <>
      <Sun imgSrc={sun} />
      <Infinity>
        <Cloud imgSrc={cloud} />
        <Cloud imgSrc={cloud} />
      </Infinity>
      {children}
    </>
  );
};

export default Cloudy;
