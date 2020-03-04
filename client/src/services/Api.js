import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'http://94.23.47.22:3005/'
  })
}
