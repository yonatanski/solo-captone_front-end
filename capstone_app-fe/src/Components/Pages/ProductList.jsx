import React, { useState } from "react"
import styled from "styled-components"
import Announcemnt from "../MainCompnents/Announcemnt"
import Navbar from "../MainCompnents/Navbar"
import Newsletter from "../MainCompnents/Newsletter"
import Products from "../MainCompnents/Products"
import Footer from "../MainCompnents/Footer"
import { useLocation } from "react-router-dom"
import "./profile.css"

const Container = styled.div``

const Title = styled.h1`
  margin: 20px;
`

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Filter = styled.div`
  margin: 20px;
`

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`
const Option = styled.option``

const ProductList = () => {
  const location = useLocation()
  const category = location.pathname.toLowerCase().split("/")[2]
  console.log(location.pathname)
  const [filter, setFilter] = useState({})
  const [sort, setSort] = useState("newest")

  const handleFilters = (e) => {
    const value = e.target.value
    setFilter({
      ...filter,
      [e.target.name]: value,
    })
  }
  console.log(filter)

  return (
    <Container>
      <Announcemnt />
      <Navbar />

      <Title>{category.toUpperCase()}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          {/* <Select name="color" onChange={handleFilters}>
            <Option disabled>Color</Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
            <Option>pink</Option>
          </Select> */}
          <Select name="color" onChange={handleFilters}>
            <Option value="">{filter.color === "" ? "Choose" : "Deafult"}</Option>
            <Option>WHITE</Option>
            <Option>BLACK</Option>
            <Option>RED</Option>
            <Option>BLUE</Option>
            <Option>YELLOW</Option>
            <Option>GREEN</Option>
            <Option>PINK</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>

      <Products category={category} filter={filter} sort={sort} />
      <Newsletter />

      <Footer />
    </Container>
  )
}

export default ProductList
