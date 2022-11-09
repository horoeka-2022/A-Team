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
    <main className="bg-slate-700 h-screen flex justify-center items-center text-white text-4xl">
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>{fruit.name}</li>
        ))}
      </ul>
    </main>
  )
}

export default App
