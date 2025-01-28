import React, { useEffect, useState } from 'react'

const MultiEffectComponent = () => {
    const [count, setCount] = useState(0)
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        console.log("Count changed: ", count)
    }, [count])

    useEffect(() => {
      const intervalId = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1)
      }, 1000);
    
      return () => {
        clearInterval(intervalId);
      }
    }, [])
    

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increament Count</button>
      <h2>Seconds: {seconds}</h2>
    </div>
  )
}

export default MultiEffectComponent
