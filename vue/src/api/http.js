import axios from 'axios'
import { Base64 } from 'js-base64'
import {getToken} from '../utils/localStorage'
import router from '../router'

const http = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 8000
})


http.interceptors.request.use(req => {
  let token = getToken()
  if(token) {
    token = Base64.encode(token+':')
    req.headers.Authorization = `Basic ${token}`
  }
  return req
}, err => {
  return Promise.reject(err)
})

http.interceptors.response.use(res => {
  return res
}, err=> {
  const {status} = err.response
  if(status === 403) {
    router.push('/user/login')
  }
})

export default http