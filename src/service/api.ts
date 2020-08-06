import axios from 'axios'

const request = axios.create({
  baseURL: 'https://exp.host/--/api/v2/push'
})

export default request