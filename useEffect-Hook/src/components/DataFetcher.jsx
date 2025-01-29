import React, { useEffect, useState } from 'react'

const DataFetcher = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => {
        setData(data)
        setLoading(false)
      })
    }, [])
    //It will run on 1st render only
    
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <ul className='list-disc px-10'>
            {data.map(post => {
                return <li key={post.id}>{post.title}</li>
            })}
        </ul>
      )}
    </div>
  )
}

export default DataFetcher
