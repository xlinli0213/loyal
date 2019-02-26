import axios from 'axios'

export function login(username, password) {
  const data = {
    username,
    password
  }

  return axios
    .post('http://localhost:3300/user/login', data)
    .then(response => {
      if (response.data.OK) {
        localStorage.setItem('token', response.data.token)
        window.location.href = '/'
      }
      return response
    })
    .catch(error => {
      console.log(error)
    })
}

export function register(username, password) {
  const data = {
    username,
    password
  }

  axios
    .post('http://localhost:3300/user/register', data)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
}
