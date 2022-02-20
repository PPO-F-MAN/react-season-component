import React, { FC } from "react";
import { Sun, Cloud, Infinity } from "./styled";

const END_POINT =
  "https://github.com/PPO-F-MAN/react-season-component/blob/develop/public/asset/weather/cloudy";
const sun = END_POINT + "/sun.png?raw=true";
const cloud = END_POINT + "/cloud.png?raw=true";

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
