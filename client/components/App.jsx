import React, { useState, useEffect } from 'react'
import { fetchProfiles } from '../apis/profiles'

// import Form from './Form'

const App = () => {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    fetchProfiles()
      .then((profiles) => {
        console.log(profiles)
        setProfiles(() => profiles)
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
    </section>
  )
}

export default App
