const connection = require('./connection')

module.exports = {
  getFruits,
}

function getFruits(db = connection) {
  return db('fruits').select()
}
