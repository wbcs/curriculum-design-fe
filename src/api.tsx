import { message } from 'antd'
import qs from 'qs'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000/api/'

axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded'

// Add a response interceptor
axios.interceptors.response.use(
  function(res) {
    if (res.status === 200 || res.status === 304) return res.data
    return Promise.reject(res)
  },
  function(error) {
    return Promise.reject(error)
  }
)

export const fetchSignUp = (params: object) =>
  axios.post('/sign-up', qs.stringify(params))

export const fetchLogin = (params: object) =>
  axios.post('/login', qs.stringify(params))

export const fetchIsLogin = () => axios.get('/is-login')

// axios.get('/user', {
//   params: {
//     ID: 12345
//   }
// })
// .then(function (response) {
//   console.log(response);
// })
// .catch(function (error) {
//   console.log(error);
// });
