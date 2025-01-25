import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Button from './components/Button';

function App() {
  const [count,setCount] = useState(0);
  function handleClick() {
    setCount(count+1);
  }

  return (
    <div>
      <Button handleClick={handleClick} text="Click me">
        <h1>{count}</h1>
        </Button>

      {/* <Card name="Amit">
        <h1>Best Web Developer</h1>
        <p>Trying to be consistent</p>
        <p>Will complete the course soon</p>
      </Card>
      <Card children="I am children">
        Hello Duniya
      </Card> */}
    </div>
  )
}

export default App
