import axios from "axios"
// const BASE_URL = "http://localhost:3050/api/"
const BASE_URL = `${process.env.REACT_APP_BE_URL}/api/`
const TOKEN = localStorage.getItem("persist:root")
  ? JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user)
      .currentUser?.accessToken
  : undefined
console.log(TOKEN)
export const publicRequest = axios.create({
  baseURL: BASE_URL,
})

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjczMjgyMDg0N2RlZWNhOGRkMDAyM2IiLCJyb2xlIjp0cnVlLCJpYXQiOjE3MjQyNDM5NzEsImV4cCI6MTcyNDg0ODc3MX0.stj8fFUB1yFgUlQMlhAmYFqRTDhEw3GR9O2VPh5u-Z0`,
  },
})
