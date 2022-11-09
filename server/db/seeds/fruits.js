exports.seed = async function (knex) {
  await knex('fruits').del()
  await knex('fruits').insert([
    { id: 1, name: 'Banana' },
    { id: 2, name: 'Apple' },
    { id: 3, name: 'Orange' },
  ])
}
