import React, { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { userRequest } from "../../ReqMethod"

const Success = () => {
  const navigate = useNavigate()
  const location = useLocation()
  console.log("state", location.state)
  const data = location.state.stripeData
  const state = location.state
  const cart = location.state.cart
  const [orderId, setOrderId] = useState(null)

  useEffect(() => {
    getSingleProducts()
  }, [])

  const getSingleProducts = async () => {
    try {
      const response = await userRequest.post(`orders/admin`, state)
      setOrderId(response.data)
    } catch (error) {}
  }
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {orderId ? `Order has been created successfully. Your order number is ${orderId._id}` : `Successfull. Your order is being prepared...`}
      <button style={{ padding: 10, marginTop: 20 }} onClick={() => navigate("/")}>
        Go to Homepage
      </button>
    </div>
  )
}

export default Success
