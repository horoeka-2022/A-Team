exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id')
    table.string('name')
    table.string('pronouns')
    table.string('interests')
    table.string('filepaths')
    table.string('zodiac')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
