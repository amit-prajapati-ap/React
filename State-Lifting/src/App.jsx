import Card from "./components/Card"
import { useState } from "react"

function App() {
  // Create, Manage, Change the state
  // Sabhi child me state ko sync karwadenge
  const [name, setName] = useState("")
  return (
    <div>
      <Card title="Card 1" name={name} setName={setName}/>
      <p>I am inside Parent Component and Value of Name is : {name}</p>
      <Card title="Card 2" name={name} setName={setName}/>
    </div>
  )
}

export default App
