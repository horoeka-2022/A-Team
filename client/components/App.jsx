import React, { useState, useEffect } from 'react'
import { getAllUsers } from '../apis/profiles'
import List from './List'

// import Form from './Form'

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
          type="image"
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
      <List users={users} />
    </section>
  )
}

export default App
