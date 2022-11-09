import React, { useState, useEffect } from 'react'
import { fetchFruits } from '../apiClient'

const App = () => {
  const [fruits, setFruits] = useState([])
  useEffect(() => {
    fetchFruits()
      .then((fruits) => {
        setFruits(() => fruits)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  return (
    <>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>{fruit.name}</li>
        ))}
      </ul>
    </>
  )
}

export default App
