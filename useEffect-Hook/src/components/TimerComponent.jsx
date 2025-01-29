import React, { useEffect, useState } from 'react'

const TimerComponent = () => {
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
      const intervalId = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1)
      }, 1000);
    
      return () => {
        //It will execute only when the Component is unmount
        clearInterval(intervalId)
      }
    }, [])

  return (
    <div>
      <h1>Seconds: {seconds}</h1>
    </div>
  )
}

export default TimerComponent
