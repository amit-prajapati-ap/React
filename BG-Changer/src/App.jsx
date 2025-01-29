import React, { useState } from 'react'

const App = () => {
  const [color, setColor] = useState("")

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-gray-200 px-3 py-2 rounded-xl'>
          <button onClick={() => setColor("red")} className='outline-none py-1 text-white rounded-lg shadow-lg px-4 bg-red-600 cursor-pointer'>Red</button>
          <button onClick={() => setColor("green")} className='outline-none py-1 text-white rounded-lg shadow-lg px-4 bg-green-700 cursor-pointer'>Green</button>
          <button onClick={() => setColor("blue")} className='outline-none py-1 text-white rounded-lg shadow-lg px-4 bg-blue-700 cursor-pointer'>Blue</button>
          <button onClick={() => setColor("yellow")} className='outline-none py-1 text-black rounded-lg shadow-lg px-4 bg-yellow-300 cursor-pointer'>Yellow</button>
          <button onClick={() => setColor("purple")} className='outline-none py-1 text-white rounded-lg shadow-lg px-4 bg-purple-600 cursor-pointer'>Purple</button>
          <button onClick={() => setColor("white")} className='outline-none py-1 text-black rounded-lg shadow-lg px-4 bg-white cursor-pointer'>White</button>
          <button onClick={() => setColor("black")} className='outline-none py-1 text-white rounded-lg shadow-lg px-4 bg-black cursor-pointer'>Black</button>
          <button onClick={() => setColor("gray")} className='outline-none py-1 text-white rounded-lg shadow-lg px-4 bg-gray-600 cursor-pointer'>Gray</button>
          <button onClick={() => setColor("pink")} className='outline-none py-1 text-white rounded-lg shadow-lg px-4 bg-pink-400 cursor-pointer'>Pink</button>
          <button onClick={() => setColor("aqua")} className='outline-none py-1 text-black rounded-lg shadow-lg px-4 bg-cyan-300 cursor-pointer'>Aqua</button>
        </div>
      </div>
    </div>
  )
}

export default App

