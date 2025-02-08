import React, { useCallback, useState } from "react";
import ChildComponent from "./components/ChildComponent";
import ExpensiveTask from "./components/ExpensiveTask";

const App = () => {
  // const [count, setCount] = useState(0);

  // const increament = useCallback(() => {
  //   setCount(count + 1);
  // }, [count]);

  return (
    <div className="flex flex-col items-center gap-1">
      {/* <h1 className="text-2xl">Count: {count}</h1>
      <button
        onClick={increament}
        className="text-sm w-[100px] bg-blue-500 px-2 py-0.5 rounded-sm hover:bg-blue-600 duration-300 transition-all"
      >
        Increament
      </button>
      <ChildComponent btnName="Click me" increament={increament} /> */}
      <ExpensiveTask />
    </div>
  );
};

export default App;
