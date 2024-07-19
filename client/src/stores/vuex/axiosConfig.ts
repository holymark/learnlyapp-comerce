import axios from 'axios'

const baseURL = import.meta.env.VUE_APP_API_BASE_URL || 'http://localhost:8081'

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default axiosInstance
