import React, { useEffect, useState } from "react"
import styled from "styled-components"
import SingleProduct from "./SingleProduct"
import { popularProducts } from "../../data"
import axios from "axios"

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
const Products = ({ category, filter, sort }) => {
  const [products, setProducts] = useState([])
  const [filterdProducts, setFilterdProducts] = useState([])

  useEffect(() => {
    getProducts()
  }, [category])

  const getProducts = async () => {
    try {
      const response = await axios.get(category ? `http://localhost:3005/api/products?category=${category}` : "http://localhost:3005/api/products")
      console.log(response)
      setProducts(response.data)
    } catch (error) {}
  }

  useEffect(() => {
    category && setFilterdProducts(products.filter((item) => Object.entries(filter).every(([key, value]) => item[key].includes(value))))
  }, [products, category, filter])

  useEffect(() => {
    if (sort === "newest") {
      setFilterdProducts((prev) => [...prev].sort((a, b) => a.createdAt - b.createdAt))
    } else if (sort === "asc") {
      setFilterdProducts((prev) => [...prev].sort((a, b) => a.price - b.price))
    } else {
      setFilterdProducts((prev) => [...prev].sort((a, b) => b.price - a.price))
    }
  }, [sort])

  return <Container>{category ? filterdProducts.map((item) => <SingleProduct key={item.id} item={item} />) : products.slice(0, 8).map((item) => <SingleProduct key={item.id} item={item} />)}</Container>
}

export default Products
