import React from "react";
import { Season, Time, Weather } from "./lib";

function App() {
  return (
    <div>
      <Season animation="animation" />
      <Time />
      <Weather />
    </div>
  );
}

export default App;
