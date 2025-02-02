import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()
  function handleClick() {
    navigate("/dashboard")
  }
  return (
    <div>
      About Page
      <button className='bg-blue-500 m-2 p-2 rounded-md' onClick={handleClick}>
        Move to DashBoard Page
      </button>
    </div>
  )
}

export default About
