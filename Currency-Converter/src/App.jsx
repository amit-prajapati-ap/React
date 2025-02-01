import React, { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import InputBox from './components/InputBox'
import heroImage from "./assets/pexels-n-voitkevich-6120249.jpg";

const App = () => {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("USD")
  const [to, setTo] = useState("INR")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * (currencyInfo[to].value).toFixed(2))
  }

  return (
    <div className='w-full h-screen flex gap-5 justify-between items-center bg-cover bg-no-repeat' style={{backgroundImage: `url("https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`}}>
      
      <div className='w-full ml-5'>
        <div className='w-full max-w-md mx-auto border border-gray-600 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form onSubmit={(e) => {
            e.preventDefault()
            convert()
          }}>
            <div className='w-full mb-1'>
            <InputBox label='From' amount={amount} currencyOptions={options} onAmountChange={(amount) => setAmount(amount)} onCurrencyChange={(currency) => setFrom(currency)} selectCurrency= {from} />
            </div>

            <div className='relative w-full h-0.5'>
              <button type='button' className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5' onClick={swap}>Swap</button>
            </div>

            <div className='w-full mt-1 mb-4'>
              <InputBox label='To' amount={convertedAmount} currencyOptions={options} onCurrencyChange={(currency) => setTo(currency)} selectCurrency= {to} amountDisable />
            </div>

            <button type='submit' className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
          </form>
        </div>
      </div>
      
      <div>
        <img src={heroImage} alt="image" className='h-screen w-[50vw] flex-shrink-0' />
      </div>
    </div>
  )
}

export default App

