import React from 'react'

function List({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <img src={user.photo} alt="person"></img>
          {user.name} {user.pronouns} {user.intrests} {user.zodiac}
        </li>
      ))}
    </ul>
  )
}

export default List
