import React from "react";

const ChildComponent = React.memo((props) => {
  console.log("Child Component re-rendered");

  return (
    <div>
      <button onClick={props.increament} className="text-sm w-[100px] bg-green-500 px-2 py-0.5 rounded-sm hover:bg-green-600 duration-300 transition-all">
        {props.btnName}
      </button>
    </div>
  );
});

export default ChildComponent;
//If React.memo -> wrap -> component -> then component re-render when props will be changing else no re-render

//if you are sending the function then React.memo is not able to stop re-render for child component