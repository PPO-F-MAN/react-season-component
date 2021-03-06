import React, { useEffect, useState } from "react";
import Summer from "./Summer";
import Winter from "./Winter";
import Spring from "./Spring";
import Autumn from "./Autumn";
import { Season as SeasonProps } from "../types/common";
import { SeasonContainer } from "./styled";

const Season: React.FC<SeasonProps> = ({ children, type = "auto" }) => {
  const [seasonType, setSeasonType] = useState<string>(type);

  const getSeason = () => {
    let mon = new Date().getMonth() + 1;

    if (3 <= mon && mon <= 5) {
      setSeasonType("spring");
      return "spring";
    } else if (6 <= mon && mon <= 8) {
      setSeasonType("summer");
      return "summer";
    } else if (9 <= mon && mon <= 11) {
      setSeasonType("autumn");
      return "autumn";
    } else {
      setSeasonType("winter");
      return "winter";
    }
  };

  const handleSeasonType = (type: string) => {
    if (type === "auto") {
      type = getSeason();
    }

    switch (type) {
      case "spring":
        return <Spring type="spring" />;
      case "summer":
        return <Summer type="summer" />;
      case "autumn":
        return <Autumn type="autumn" />;
      case "winter":
        return <Winter type="winter" />;
    }
  };

  useEffect(() => {
    if (type === "auto") {
      setSeasonType(getSeason());
    } else {
      setSeasonType(type);
    }
  }, [type]);

  return (
    <SeasonContainer type={seasonType}>
      {handleSeasonType(seasonType)}
      <div>{children}</div>
    </SeasonContainer>
  );
};

export default Season;
