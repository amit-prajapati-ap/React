import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  function handleClick() {
    navigate("/about")
  }
  return (
    <div>
      Home Page
      <button className='bg-blue-500 m-2 p-2 rounded-md' onClick={handleClick}>
        Move to About Page
      </button>
    </div>
  )
}

export default Home
