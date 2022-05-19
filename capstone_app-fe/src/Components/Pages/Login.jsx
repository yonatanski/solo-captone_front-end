import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { login } from "../../redux/apiCall"
import { Link } from "react-router-dom"

import { mobile } from "../../Responsive/responsive"
import facebook from "../../Logo/facebooksignin.png"
import google from "../../Logo/goglesignin.png"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #000000;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`

const Linkk = styled.div`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`
const Error = styled.span`
  color: red;
`
const LogosignIN = styled.img`
  width: 300px;

  cursor: pointer;
  ${mobile({ width: "250px" })}
`

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const { isFetching, error } = useSelector((state) => state.user)
  const handleLogin = (e) => {
    e.preventDefault()
    login(dispatch, { email, password })
    navigate("/")
  }
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
          <Input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
          <Button onClick={handleLogin} disabled={isFetching}>
            LOGIN
          </Button>
          <Link to={`/`}>
            <LogosignIN src={facebook} />
          </Link>
          <Link to={`/`}>
            <LogosignIN src={google} />
          </Link>
          {error && <Error>Something went wrong...</Error>}
          {/* <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link> */}
          <Link to={`/register`}>
            <Linkk>CREATE A NEW ACCOUNT</Linkk>
          </Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
