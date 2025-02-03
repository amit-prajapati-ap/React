import React, { createContext, useState } from 'react'
import ChildA from './components/ChildA'

//Step-1 : Creating context
const UserContext = createContext()
const ThemeContext = createContext();

const App = () => {
  //Step-3 : Pass Value
  const [user, setUser] = useState({name:"Amit"})
  const [theme, setTheme] = useState("light")
  return (
    <div>
      {/* Step-2 : Wrap all the child inside a provider */}
      <UserContext.Provider value={user}>
        <ThemeContext.Provider value={{theme, setTheme}}>
          <div className='h-[200px] w-[200px] flex flex-col justify-center items-center border-2' style={{backgroundColor:theme==="light" ? "blue" : "black"}}>
            <ChildA/>
          </div>
        </ThemeContext.Provider>
      </UserContext.Provider>
    </div>
  ) 
}

export default App
// Step-4 : Consume Value
export {UserContext}
export {ThemeContext}