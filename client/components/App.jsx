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
    <>
      <header>
        <img
          className="logo"
          src="/images/LoveKnextion.001.png"
          alt="Love Knextion Logo"
        />
      </header>
      <section className="formSection">
        <Form setUsers={setUsers} />
        <div className="row">
          <List users={users} />
        </div>
      </section>
    </>
  )
}

export default App
