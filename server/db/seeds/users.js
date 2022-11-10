/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {
      id: 1,
      name: 'Elonged Tusk',
      pronouns: 'bad/man',
      interests: 'rockets and ruining democracy',
      photo: '#',
      zodiac: 'cancer',
    },
    {
      id: 2,
      name: 'Marc Iceberg',
      pronouns: 'liz/ard',
      interests: 'virtual reality and ruining democracy',
      photo: '#',
      zodiac: 'taurus',
    },
    {
      id: 3,
      name: 'Nah East',
      pronouns: 'ye/sus',
      interests: 'my ex-wives partners and ruining the fashion industry',
      photo: '#',
      zodiac: 'gemini',
    },
    {
      id: 4,
      name: 'Elizabeth Holmes',
      pronouns: 'li/ar',
      interests:
        'blood and making things that really work, i promise they do, believe me, they really do',
      photo: '#',
      zodiac: 'aquarius',
    },
    {
      id: 5,
      name: 'Cleans',
      pronouns: 'she/her, pronouns do not suck',
      interests:
        'I love you but please turn off ur phone or give me a dall. I cannot support this hate. Please stop this. I know this is not your heart. Also giving my kid a unpronounceable name',
      photo: '#',
      zodiac: 'pisces',
    },
  ])
}
