import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    // const [data, setData] = useState([])
    // useEffect(() => {
    //   fetch("https://api.github.com/users/amit-prajapati-ap")
    //   .then(response => response.json())
    //   .then(data => setData(data))
    //   console.log(data)
    // }, [])

    const data = useLoaderData()
    
  return (
    <div className='text-center m-5 bg-gray-600 text-white p-5 text-3xl'>
      Github Public Repos: {data.public_repos}
      <img className='mx-auto mt-7 rounded-full' src={data.avatar_url} alt="Git Picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/amit-prajapati-ap")
    return response.json()
}