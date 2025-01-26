import React, { useState } from 'react'
import "./counter.css"

const Counter = () => {
    let [count, setCount] = useState(0);
    const incre = () => {
      if(count < 20) setCount(count + 1);
    }
    const decre = () => {
      if(count > 0) setCount(count - 1);
    }
  return (
    <div className='counter-container'>
      <p id='para'>Counter Value {count}</p>
      <button id='Increamentbtn' onClick={() => incre()}>Increament {count}</button>
      <button id='Decreamentbtn' onClick={() => decre()}>Decreament {count}</button>
    </div>
  )
}

export default Counter
