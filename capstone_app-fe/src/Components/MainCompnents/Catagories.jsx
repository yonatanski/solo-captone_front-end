import React from "react"
import styled from "styled-components"
import { categories } from "../../data"
import CategoryItem from "./CategoryItem"
const Container = styled.div`
  //   width: 100%;
  //   height: 100vh;
  display: flex;
  padding: 20px;
  justify-content: space-between;

  //   position: relative;
  //   overflow: hidden;

  //   align-items: center;
`

const Catagories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </Container>
  )
}

export default Catagories
