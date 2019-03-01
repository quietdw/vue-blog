import request from '@/helpers/request.js'

const URL = {
  REGISTER: '/auth/register',
  LOGIN: '/auth/login',
  LOGOUT: '/auth/logout',
  GET_INFO: '/auth'
}

export default {
  register ({
    username,
    password
  }) {
    return request(URL.REGISTER, 'POST', {
      username,
      password
    }) // es6的写法
  },
  login ({
    username,
    password
  }) {
    return request(URL.LOGIN, 'POST', {
      username,
      password
    })
  },
  logout () {
    return request(URL.LOGOUT, 'GET')
  },
  getInfo () {
    return request(URL.GET_INFO, 'GET')
  }
}
