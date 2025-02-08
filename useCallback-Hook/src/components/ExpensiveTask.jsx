import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";

const ExpensiveTask = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);
  const prevFunction = useRef(null)

  const expensiveCalc = useCallback((num) => {
    console.log("Inside Expensive Task");
    for (let i = 0; i < 1000000000; i++) {}
    return num * 2;
  }, [count]);

  useEffect(() => {
    if(prevFunction.current) {
        if(prevFunction.current === expensiveCalc) {
            console.log("Function not Re-Created")
        }
        else {
            console.log("Function Re-Created")
        }
    }
    else {
        performance.current = expensiveCalc
    }
  }, [expensiveCalc])
  

  let doubleValue = expensiveCalc(input);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-2">
      <div>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-green-600 rounded-sm px-2"
        >
          Click Me
        </button>
        <p className="text-center">Value: {count}</p>
      </div>

      <div>
        <input
          type="number"
          placeholder="Enter Number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border rounded-sm pl-2 outline-none border-gray-600"
        />
        <p className="text-center">Double: {doubleValue ? doubleValue : 0}</p>
      </div>
    </div>
  );
};

export default ExpensiveTask;
