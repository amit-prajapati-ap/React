import React, { useRef, useState } from 'react'

const Stopwatch = () => {
    const [time, setTime] = useState(0)
    let timerRef = useRef(null)

    function startTimer() {
        timerRef.current = setInterval(() => {
            setTime(time => time+1)
        }, 1000);
    }

    function stopTimer() {
        clearInterval(timerRef.current)
        timerRef.current = null
    }

    function resetTimer() {
        stopTimer()
        setTime(0)
    }

  return (
    <div className='flex flex-col gap-2 items-center'>
      <h1 className='text-2xl mb-3'>StopWatch: {time} seconds</h1>

      <button onClick={startTimer} className='bg-blue-600 hover:bg-blue-700 transition-all duration-300 rounded-sm w-[100px]'>Start</button>

      <button onClick={stopTimer} className='bg-red-600 hover:bg-red-700 transition-all duration-300 rounded-sm w-[100px]'>Stop</button>

      <button onClick={resetTimer} className='bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 text-black rounded-sm w-[100px]'>Reset</button>
    </div>
  )
}

export default Stopwatch
