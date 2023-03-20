import { publicRequest } from "../ReqMethod"
import { loginStart, loginSuccess, loginFailure, regstrationStart, regstrationSuccess, regstrationFailure } from "./userRedux"

export const login = async (dispatch, user) => {
  dispatch(loginStart())
  try {
    const res = await publicRequest.post("/auth/login", user)
    dispatch(loginSuccess(res.data))
  } catch (err) {
    dispatch(loginFailure())
  }
}

export const register = async (dispatch, user) => {
  dispatch(regstrationStart())
  try {
    const res = await publicRequest.post("/auth/register", user)
    dispatch(regstrationSuccess(res.data))
  } catch (err) {
    dispatch(regstrationFailure())
  }
}
