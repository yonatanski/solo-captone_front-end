import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { publicRequest } from "../../ReqMethod"

const Container = styled.div`
  height: 30px;
  background-color: green;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
`

const Announcemnt = () => {
  const [annoucmnet, setAnnoucmnet] = useState([])

  const getProducts = async () => {
    try {
      const response = await publicRequest.get("anncoucment")
      console.log(response.data)
      if (response.status === 200) {
        setAnnoucmnet(response.data)
      }
    } catch (error) {}
  }
  useEffect(() => {
    getProducts()
  }, [])
  return (
    <Container>
      <h3>{annoucmnet[0]?.message}</h3>
    </Container>
  )
}

export default Announcemnt
