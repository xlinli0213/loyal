import axios from 'axios'

export function auth() {
  axios
    .get('http://localhost:3300/')
    .then(response => {
      console.log('Certification success')
    })
    .catch(error => {
      window.location.href = '/user'
      console.log(error)
    })
}

axios.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  config.headers.common.Authorization = 'Bearer ' + token
  return config
})
