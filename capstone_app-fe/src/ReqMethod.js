import axios from "axios"
// const BASE_URL = "http://localhost:3050/api/"
const BASE_URL = `${process.env.REACT_APP_BE_URL}/api/`
const TOKEN = localStorage.getItem("persist:root") ? JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user).currentUser?.accessToken : undefined
console.log(TOKEN)
export const publicRequest = axios.create({
  baseURL: BASE_URL,
})

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `Bearer ${TOKEN}` },
})
