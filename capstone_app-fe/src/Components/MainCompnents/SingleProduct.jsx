import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons"
import React from "react"
import styled from "styled-components"

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;

  z-index: 3;
  position: absolute;
  transition: all 0.5s ease;
  cursor: pointer;
`
const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e1ebf0;
  position: relative;

  &: hover ${Info} {
    opacity: 1;
  } ;
`
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: absolute;
  background-color: white;
`
const Image = styled.img`
  height: 75%;
  z-index: 2;
`

const Icon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;

  &: hover {
    background-color: white;
    transform: scale(1.1);
  } ;
`

const SingleProduct = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image key={item.id} src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  )
}

export default SingleProduct
