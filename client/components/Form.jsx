import React from 'react'
import { useState } from 'react'
import { addUser, getAllUsers } from '../apis/profiles'

function Form({ setUsers }) {
  const [inputUser, setInputUser] = useState({})

  function handleChange(event) {
    const value = event.target.value
    const key = event.target.name
    setInputUser((inputUser) => ({ ...inputUser, [key]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    await addUser(inputUser)
    const recentUser = await getAllUsers()
    setUsers(() => recentUser)
  }

  return (
    <section className="formSection">
      <div className="form">
        <h2>Profiles!</h2>
        <input
          type="text"
          name="name"
          value={inputUser.name}
          onChange={handleChange}
          placeholder="Name"
          required={true}
        />
        <input
          type="text"
          name="pronouns"
          value={inputUser.pronouns}
          onChange={handleChange}
          placeholder="Pronouns"
          required={true}
        />
        <input
          type="text"
          name="interests"
          value={inputUser.interests}
          onChange={handleChange}
          placeholder="Interests"
          required={true}
        />

        <input
          type="text"
          name="zodiac"
          value={inputUser.zodiac}
          onChange={handleChange}
          placeholder="Zodiac"
          required={true}
        />
      </div>

      <button onClick={handleSubmit}>Submit</button>
    </section>
  )
}

export default Form
