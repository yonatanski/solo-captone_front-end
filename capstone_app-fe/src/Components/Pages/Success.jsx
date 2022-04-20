import React, { useState } from "react"
import { useLocation } from "react-router-dom"

const Success = () => {
  const location = useLocation()
  console.log(location.state)
  const data = location.state.stripeData
  const cart = location.state.cart
  const [orderId, setOrderId] = useState(null)
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
      {orderId ? `Order has been created successfully. Your order number is ${orderId}` : `Successfull. Your order is being prepared...`}
      <button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button>
    </div>
  )
}

export default Success
