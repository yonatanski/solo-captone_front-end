import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons"
import React from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { addProduct } from "../../redux/cartRedux"
import { addProductwishList } from "../../redux/wishListRedux"

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

  z-index: 0;
  position: absolute;
  transition: all 0.5s ease;
  cursor: pointer;
`
const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 200px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e1ebf0;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
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
  z-index: 0;
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

  &:hover {
    background-color: white;
    transform: scale(1.1);
  }
`

const SingleProduct = ({ item }) => {
  const dispatch = useDispatch()

  const handleAddToCart = (product) => {
    dispatch(addProduct(product))
  }
  const handleAddToWish = (product) => {
    dispatch(addProductwishList(product))
  }
  return (
    <Container>
      <Circle />
      <Image key={item._id} src={item.img[0]} />
      {/* <h6> {item.title} </h6> */}
      <Info>
        <Icon>
          <ShoppingCartOutlined style={{ color: "red" }} fontSize="large" onClick={() => handleAddToCart({ ...item, qty: 1 })} />
        </Icon>
        <Link to={`/product/${item._id}`}>
          <Icon>
            <SearchOutlined fontSize="large" />
          </Icon>
        </Link>
        <Icon>
          <FavoriteBorderOutlined fontSize="large" style={{ color: "primary" }} onClick={() => handleAddToWish(item)} />
        </Icon>
        {/* <h6> {item.title} </h6> */}
      </Info>
    </Container>
  )
}

export default SingleProduct
