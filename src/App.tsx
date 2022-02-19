import React from "react"
import { Season, Time, Weather } from "./lib"

function App() {
  return (
    <div>
      <Time type="day" typeChangeTerm={5} anim />
    </div>
  )
}

export default App
