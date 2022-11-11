import React, { useState, useEffect } from 'react'
import { getAllUsers } from '../apis/profiles'
import List from './List'
import Form from './Form'

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getAllUsers()
      .then((users) => {
        console.log(users)
        setUsers(() => users)
      })
      .catch((err) => console.log(err.message))
  }, [])

  return (
    <section className="formSection">
      <Form setUsers={setUsers} />
      <List users={users} />
    </section>
  )
}

export default App
