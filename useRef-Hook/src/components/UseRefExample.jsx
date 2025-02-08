import React, { useRef, useState } from "react";

const UseRefExample = () => {
  const [count, setCount] = useState(0);
  // UseCase 1
  let val = useRef(0);
  const handleClick = () => {
    val.current += 1;
    // console.log("Value of val: ", val.current)
    setCount(count + 1);
  };

  // UseCase 2
  let btnRef = useRef();
  const changeColor = () => {
    btnRef.current.style.backgroundColor = "red";
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <button
        onClick={handleClick}
        className="bg-blue-600 px-2 py-1 hover:bg-blue-700 transition-all duration-300"
        ref={btnRef}
      >
        Increament
      </button>

      <br />

      <button
        onClick={changeColor}
        className="bg-green-600 px-2 py-1 hover:bg-green-700 transition-all duration-300"
      >
        Change color of 1st Button
      </button>

      <br />

      <div>Count: {count}</div>
    </div>
  );
};

export default UseRefExample;
