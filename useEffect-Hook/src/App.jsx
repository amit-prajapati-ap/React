import React, { useEffect, useState } from 'react'
import './App.css'
import LoggerComponent from './components/LoggerComponent'
import TimerComponent from './components/TimerComponent'
import DataFetcher from './components/DataFetcher'
import ResizeComponent from './components/ResizeComponent'
import MultiEffectComponent from './components/MultiEffectComponent'

const App = () => {
  const [count,setCount] = useState(0)
  const [total,setTotal] = useState(1)

  //First -> side-effect function
  //Second -> clean-up function
  //Third -> comma separeted dependencies list

  //Variation 1
  //Runs on every render
  useEffect(() => {
    alert("I will run on each render")
  })

  //Variation 2
  //That runs on every first render
  useEffect(() => {
    alert("I will run only 1st render")
  }, [])

  //Variation 3
  //That runs on updation of State
  useEffect(() => {
    alert("I will run every time when count is updated")
  }, [count])

  //Variation 4
  //Multiple dependencies
  useEffect(() => {
    alert("I will run every time when count or total is updated")
  }, [count, total])

  //Variation 5
  //Lets add cleanup function
  useEffect(() => {
    alert("Count is updated")

    return () => {
      alert("Count is unmounted from UI")
    }
  }, [count])
  
  const handleClick = () => {
    setCount(count + 1)
  }

  const handleClickTotal = () => {
    setTotal(total + 1)
  }
  
  return (
    // <div>
    //   <button className='px-4 py-2 rounded-md bg-green-400 w-[150px]' onClick={handleClick}>
    //     Update Count
    //   </button>
    //   <br />
    //   Count is: {count}

    //   <br />
    //   <button className='px-4 py-2 rounded-md bg-green-400 w-[150px]' onClick={handleClickTotal}>
    //     Update Total
    //   </button>
    //   <br />
    //   Total is: {total}
    // </div>

    <div>
      {/* <LoggerComponent/> */}

      {/* <TimerComponent/> */}

      {/* <DataFetcher/> */}

      {/* <ResizeComponent/> */}

      <MultiEffectComponent/>
    </div>
  )
}

export default App
