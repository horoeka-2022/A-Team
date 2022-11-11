import request from 'superagent'

export function getAllUsers() {
  return request.get('/api/v1/users').then((res) => res.body)
}

export function addUser(data) {
  return request.post('/api/v1/users').send(data)
}
