import "./App.css"
import Home from "./Components/Pages/Home"
import Login from "./Components/Pages/Login"
import Register from "./Components/Pages/Register"
import ProductDetail from "./Components/Pages/ProductDetail"
import ProductList from "./Components/Pages/ProductList"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Cart from "./Components/Pages/Cart"
import { useState } from "react"
import Success from "./Components/Pages/Success"
import { useSelector } from "react-redux"

function App() {
  const user = useSelector((state) => state.user.currentUser)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/products/:category" exact element={<ProductList />} />
        <Route path="/product/:id" exact element={<ProductDetail />} />
        <Route path="/cart" exact element={<Cart />} />
        <Route path="/success" exact element={<Success />} />
        <Route path="/login" element={user ? <Navigate replace to="/" /> : <Login />} />
        <Route path="/register" element={user ? <Navigate replace to="/" /> : <Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
