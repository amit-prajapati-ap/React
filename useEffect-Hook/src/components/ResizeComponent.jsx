import React, { useEffect, useState } from 'react'

const ResizeComponent = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
      const handleResize = () => setWindowWidth(window.innerWidth)
      console.log("Event Listener Added")
      
      window.addEventListener("resize", handleResize)
      
      return () => {
        console.log("Event Listener Removed")
        window.removeEventListener("resize", handleResize)
      }
    }, [])
    //It will run on 1st render only
    
  return (
    <div>
      <h1>Window width: {windowWidth}</h1>
    </div>
  )
}

export default ResizeComponent
