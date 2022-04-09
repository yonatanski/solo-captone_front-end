import React from "react"
import styled from "styled-components"
import SingleProduct from "./SingleProduct"
import { popularProducts } from "../../data"

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <SingleProduct key={item.id} item={item} />
      ))}
    </Container>
  )
}

export default Products
