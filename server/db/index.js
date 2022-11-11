const connection = require('./connection')

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
}

function getAllUsers(db = connection) {
  return db('users').select()
}

function getUserById(userId, db = connection) {
  return db('users').select().where('id', userId).first()
}

//addUser
function addUser(newUser, db = connection) {
  return db('users').insert(newUser)
}
