import React, { useEffect, useState } from "react"
import styled from "styled-components"
import SingleProduct from "./SingleProduct"
import Spinner from "./Spinner/Spinner"
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
  const [isLoading, setIsLoading] = useState(false)
  const [filterdProducts, setFilterdProducts] = useState([])

  useEffect(() => {
    getProducts()
  }, [category])

  const getProducts = async () => {
    try {
      const response = await axios.get(category ? `${process.env.REACT_APP_BE_URL}/api/products?category=${category}` : `${process.env.REACT_APP_BE_URL}/api/products`)
      console.log(response)
      setProducts(response.data)
      setIsLoading(true)
    } catch (error) {}
  }

  useEffect(() => {
    category && setFilterdProducts(products.filter((item) => Object.entries(filter).every(([key, value]) => item[key].includes(value))))

    if (filter?.color === "") {
      setFilterdProducts(products)
    }
  }, [products, category, filter])

  useEffect(() => {
    if (sort === "newest") {
      setFilterdProducts(products)
      setFilterdProducts((prev) => [...prev].sort((a, b) => a.createdAt - b.createdAt))
    } else if (sort === "asc") {
      setFilterdProducts((prev) => [...prev].sort((a, b) => a.price - b.price))
    } else {
      setFilterdProducts((prev) => [...prev].sort((a, b) => b.price - a.price))
    }
  }, [sort])

  return isLoading ? <Container>{category ? filterdProducts.map((item) => <SingleProduct key={item.id} item={item} />) : products.map((item) => <SingleProduct key={item.id} item={item} />)}</Container> : <Spinner />
}

export default Products
