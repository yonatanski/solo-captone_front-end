import React from "react"
import styled from "styled-components"
import { categories } from "../../data"
import { mobile } from "../../Responsive/responsive"
import CategoryItem from "./CategoryItem"
const Container = styled.div`
  //   width: 100%;
  //   height: 100vh;
  display: flex;
  flex-direction: "column";
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}//   position: relative;
  //   overflow: hidden;

  //   align-items: center;
`
const Wrapper = styled.div`
  padding: 10px 20px;
  margin: 10px 20px;
  display: flex;
  align-items: center;
`
const Title = styled.h1`
  color: black;
  margin: 0 auto;
`

const Catagories = () => {
  return (
    <>
      <Wrapper>
        <Title>
          <hr />
          Shop By Categories
          <hr />
        </Title>
      </Wrapper>
      <Container>
        {categories.map((item) => (
          <CategoryItem key={item.id} item={item} />
        ))}
      </Container>
    </>
  )
}

export default Catagories
