import React from 'react'

function List({ users }) {
  return (
    <>
      {users.map((user) => (
        <div className="column" key={user.id}>
          <img src={user.photo} alt="person"></img>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Pronouns:</strong> {user.pronouns}
          </p>
          <p>
            <strong>Interests:</strong> {user.interests}
          </p>
          <p>
            <strong>Zodiac:</strong> {user.zodiac}
          </p>
        </div>
      ))}
    </>
  )
}

export default List
