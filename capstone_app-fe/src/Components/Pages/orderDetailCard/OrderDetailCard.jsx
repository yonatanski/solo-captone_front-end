import { Link, useLocation, useParams } from "react-router-dom"
import "./product.css"

import { useDispatch, useSelector } from "react-redux"
import { CheckCircle, LocalShipping, Publish } from "@material-ui/icons"
import { useEffect, useMemo, useState } from "react"
import { Button } from "@material-ui/core"

// import { format } from "timeago.js"

export default function OrderDetailCard({ orderItem, i }) {
  console.log("orderitem", orderItem)
  return (
    <>
      <div className="product">
        <div className="productTitleContainer">
          <h1 className="productTitle">Order Detail {i}</h1>
          <h4 className="productTitle">Order ID-{orderItem?._id}</h4>
          <Link to="/newproduct">
            <button className="productAddButton">Create</button>
          </Link>
        </div>
        <div className="productTop"></div>
        {/*  */}
        <div className="productTop">
          <div className="productTopRight">
            <span className="widgetLgStatus">
              Order Status {orderItem.status === "pending" ? <CheckCircle /> : <LocalShipping fontSize="large" />} {orderItem.status === "pending" ? "Pending" : "Shipped"}
            </span>

            {/* <div className="widgetLgStatus">
              <Button type={orderItem.status === "pending" ? "pending" : "Delivered"} />
            </div> */}
            {orderItem.products?.products?.map((product, i) => (
              <>
                <div key={i} className="productInfoTop">
                  <img src={product.img[0]} alt="" className="productInfoImg" />
                  <span className="productName text-dark"> {product.title}</span>
                </div>

                <div className="productInfoBottom">
                  <div className="productInfoItem">
                    <span className="productInfoKey">ProductID:</span>
                    <span className="productInfoValue"> {product._id} </span>
                  </div>
                  <div className="productInfoItem">
                    <span className="productInfoKey">Price:</span>
                    <span className="productInfoValue"> {product.price}</span>
                  </div>
                  <div className="productInfoItem">
                    <span className="productInfoKey">Size:</span>
                    <span className="productInfoValue"> {product.size} </span>
                  </div>

                  <div className="productInfoItem">
                    <span className="productInfoKey">Color:</span>
                    <span className="productInfoValue">{product.color}</span>
                  </div>
                  <div className="productInfoItem">
                    <span className="productInfoKey">inStock:</span>
                    <span className="productInfoValue">{product.inStock ? "Yes" : "No"}</span>
                  </div>
                  <div className="productInfoItem">
                    <span className="productInfoKey">Quantity:</span>
                    <span className="productInfoValue">{product.qty}</span>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
