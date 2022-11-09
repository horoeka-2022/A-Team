import request from 'superagent'

export function fetchFruits() {
  return request.get('/api/v1/fruits').then((res) => res.body)
}
