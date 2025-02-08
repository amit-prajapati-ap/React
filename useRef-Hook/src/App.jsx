import React, { useEffect, useRef, useState } from "react";
import UseRefExample from './components/UseRefExample'
import Stopwatch from "./components/Stopwatch";

const App = () => {
  useEffect(() => {
    console.log("Execute in every re-renders");
  });

  return (
    <div>
      {/* <UseRefExample/> */}
      <Stopwatch/>
    </div>
  );
};

export default App;
