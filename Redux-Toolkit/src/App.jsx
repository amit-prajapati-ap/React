import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './features/counter/Slice'

const App = () => {
  const [amount, setAmount] = useState(0)

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  const handleDecreamentClick = () => {
    dispatch(decrement())
  }
  const handleIncreamentClick = () => {
    dispatch(increment());
  }

  const handleResetClick = () => {
    dispatch(reset());
  }

  const handleIncreamentByAmount = () => {
    dispatch(incrementByAmount(amount))
  }

  return (
    <div className='w-full h-screen flex flex-col gap-2 justify-center items-center'>

      <div className='flex'>
        <button onClick={handleDecreamentClick} className='bg-red-500 w-[40px] rounded-md text-sm'> - </button>

        <p className='w-[80px] text-center'>Count: {count}</p>

        <button onClick={handleIncreamentClick} className='bg-green-500 w-[40px] rounded-md text-sm'> + </button>
      </div>

      <button onClick={handleResetClick} className='bg-blue-500 w-[60px] rounded-md'> Reset </button>

      <div className='flex justify-center items-center gap-2'>

        <input type="number" value={amount} placeholder='Enter Amount' onChange={(e) => setAmount(e.target.value)} className='w-[130px] border rounded-md border-gray-500 outline-none text-sm pl-2' />

        <button onClick={handleIncreamentByAmount} className='bg-orange-600 w-[100px] rounded-md'>Inc By Amt</button>

      </div>
    </div>
  )
}

export default App
