import React, { useContext } from 'react'
import { ThemeContext } from '../App'
import { UserContext } from '../App'

const ChildC = () => {
    //Consuming Context Value
    const user = useContext(UserContext)

    const {theme, setTheme} = useContext(ThemeContext)
    const toggleTheme = () => {
      if(theme == "light") {
        setTheme("dark")
      }
      else {
        setTheme("light")
      }
    }

  return (
    <div>
      <button onClick={toggleTheme} className='px-3 py-2 bg-green-500 rounded-sm cursor-pointer'>Change Theme</button>
      <br />
      <p className='text-center text-green-400'>Data: {user.name}</p>
    </div>
  )
}

export default ChildC
