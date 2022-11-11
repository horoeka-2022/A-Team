import React from 'react'

function List({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <img
            // width={'100px'}
            src={
              user.photo ||
              'https://media.istockphoto.com/id/1196083861/vector/simple-man-head-icon-set.jpg?s=612x612&w=0&k=20&c=a8fwdX6UKUVCOedN_p0pPszu8B4f6sjarDmUGHngvdM='
            }
            alt={`a user ${user.name}`}
          ></img>
          {user.name} {user.pronouns} {user.intrests} {user.zodiac}
        </li>
      ))}
    </ul>
  )
}

export default List
