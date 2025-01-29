import React, { useEffect, useState } from 'react'

const MultiEffectComponent = () => {
    const [count, setCount] = useState(0)
    const [seconds, setSeconds] = useState(0)

    //Side-effect logic will run only when count is changed
    useEffect(() => {
        console.log("Count changed: ", count)
    }, [count])

    useEffect(() => {
      const intervalId = setInterval(() => {
        console.log("SetInterval Started")
        setSeconds(prevSeconds => prevSeconds + 1)
      }, 1000);
      
      return () => {
        console.log("SetInterval Stoped")
        clearInterval(intervalId);
      }
    }, [])
    //It will run only 1st render

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increament Count</button>
      <h2>Seconds: {seconds}</h2>
    </div>
  )
}

export default MultiEffectComponent
