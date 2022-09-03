import HttpRequest from './HttpRequest'

class UserProvider extends HttpRequest {
  getUsers(query) {
    return this.get('/users', query)
  }

  getUserById(id) {
    return this.get(`/users/${id}`)
  }

  createUser(payload) {
    return this.post('/users', payload)
  }

  updateUser(id, payload) {
    return this.put(`/users/${id}`, payload)
  }

  deleteUser(id) {
    return this.delete(`/users/${id}`)
  }
}

export default UserProvider
