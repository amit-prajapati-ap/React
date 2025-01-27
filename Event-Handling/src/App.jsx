// ------Event Handling-------

function App() {
  const handleClick = () => {
    alert("I am Clicked")
  }

  const handleMouseOver = () => {
    alert("Para ke uper mouse lekar aaye ho")
  }
  
  const handleInputChange = (e) => {
    // console.log("Input me value change hui hai")
    console.log("Value till now: ", e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Can I submit this form?")
  }

  return (
    <div>
      {/* Flat Arrow Function */}
      <button onClick={() => alert("Button click hua hai")}>
        Click me
      </button>

      {/* Immidiate Invocation */}
      {/* <button onClick={alert("Button click hua hai")}>
        Click me
      </button> */}

      {/* <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputChange}/>
        <button type="submit">Submit</button>
      </form> */}

      {/* <p onMouseOver={handleMouseOver} style={{border:"1px solid black"}}>
        I am a Para
      </p>
      <button onClick={handleClick}>
        Click me
      </button> */}
    </div>
  )
}

export default App
