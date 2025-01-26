import { useState } from "react"
import LogoutBtn from "./components/LogoutBtn"
import LoginBtn from "./components/LoginBtn"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // -------Using Early Return-------
  if(!isLoggedIn) {
    return (<LoginBtn/>)
  }
  
  // -------Using Logical Operator-------
  // return (
  //   <div>
  //     <h1>Welcome Everyone to Amit's Website</h1>
  //     <div>{isLoggedIn && <LogoutBtn/>}</div>
  //   </div>
  // )

  // -------Using Ternary Operator-------
  // return (
  //   <div>
  //     {isLoggedIn ? <LogoutBtn/> : <LoginBtn/>}
  //   </div>
  // )

  // -------Using if-else-------
  // if(isLoggedIn) {
  //   return (
  //     <LogoutBtn/>
  //   )
  // }
  // else {
  //   return (
  //     <LoginBtn/>
  //   )
  // }
}

export default App
