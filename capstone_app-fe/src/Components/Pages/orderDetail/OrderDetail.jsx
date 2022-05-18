import { Link, useLocation, useParams } from "react-router-dom"
import "./product.css"

import { useDispatch, useSelector } from "react-redux"
import { Publish } from "@material-ui/icons"
import { useEffect, useMemo, useState } from "react"

import OrderDetailCard from "../orderDetailCard/OrderDetailCard"
import { userRequest } from "../../../ReqMethod"

export default function OrderDetail({ order }) {
  // const params = useParams()
  // const orderId = params.orderId
  // const [order, setOrder] = useState([])
  // const [load, setLoad] = useState(false)

  // console.log("product id ", orderId)

  // console.log(order)

  // const getStatus = async () => {
  //   try {
  //     const response = await userRequest.get(`orders/find/${userDetail._id}`)
  //     setOrder(response.data[0])
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // useEffect(() => {
  //   getStatus()
  // }, [userDetail])

  return <>{order && order.map((orderItem, i) => <OrderDetailCard key={i} orderItem={orderItem} i={i} />)}</>
}
