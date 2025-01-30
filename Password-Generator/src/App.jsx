import React, { useCallback, useEffect, useRef, useState } from 'react'

const App = () => {

  //Necessary States
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const [Copy, setCopy] = useState(false)

  //Generating New Password
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str += "0123456789"
    }
    if (characterAllowed) {
      str += "!@#$%^&*;[]{}_"
    }

    for (let i = 0; i < length ; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str[char]
    }

    setPassword(pass)

  }, [length, numberAllowed, characterAllowed])

  //Calling passwardGenerator() on every dependencies change
  useEffect(() => {    
    setCopy(false)
    passwordGenerator()
  }, [length, numberAllowed, characterAllowed, passwordGenerator])

  const passwordRef = useRef(null)

  //Copying Password
  const copyPasswordToClipboard = useCallback(() => {
   passwordRef.current?.select()
   passwordRef.current?.setSelectionRange(0, 25)
   window.navigator.clipboard.writeText()
   setCopy(true)
  }, [password])

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-1 text-orange-500 bg-gray-800'>
      <h1 className='text-center'>Password Generator</h1>
      <div className='relative flex items-center shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" value={password} className='bg-white outline-none w-full py-1 mt-3 px-3 rounded-md' placeholder='Password' readOnly ref={passwordRef} />
        <button className='absolute w-[80px] right-0 py-1 mt-3 px-3 bg-blue-500 text-white rounded-r-md cursor-pointer' onClick={copyPasswordToClipboard}>{Copy ? "Copied" : "Copy"}</button>
      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" min={6} max={25} value={length} className='cursor-pointer' onChange={(e) => {setLength(e.target.value)}} />
          <label>Length: {length}</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox" id='numberInput' defaultChecked={numberAllowed} onChange={() => {
            setNumberAllowed((prev) => !prev)
          }} />
          <label htmlFor="numberInput">Number</label>

          <input type="checkbox" id='charInput' defaultChecked={numberAllowed} onChange={() => {
            setCharacterAllowed((prev) => !prev)
          }} />
          <label htmlFor="charInput">Character</label>
        </div>
      </div>
    </div>
  )
}

export default App
