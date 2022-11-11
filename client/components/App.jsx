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
        <div className="form">
          <h2>Profiles!</h2>
          <input type="text" name="name" placeholder="Name" required={true} />
          <input
            type="text"
            name="pronouns"
            placeholder="Pronouns"
            required={true}
          />
          <input
            type="text"
            name="interests"
            placeholder="Interests"
            required={true}
          />
          <input
            type="file"
            alt="photo"
            name="photo"
            placeholder="Upload Image"
            required={true}
          />
          <input
            type="text"
            name="zodiac sign"
            placeholder="Zodiac"
            required={true}
          />
        </div>
        <div className="row">
          <List users={users} />
        </div>
      </section>
      <section className="formSection">
        <Form setUsers={setUsers} />
        <List users={users} />
      </section>
    </>
  )
}

export default App
