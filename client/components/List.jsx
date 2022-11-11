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
        </div>
      ))}
    </>
  )
}

export default List
