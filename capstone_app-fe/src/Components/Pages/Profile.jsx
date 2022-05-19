import {
  Add,
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
  Remove,
  RemoveCircle,
  VpnKey,
} from "@material-ui/icons";
import styled from "styled-components";
import Announcemnt from "../MainCompnents/Announcemnt";
import Footer from "../MainCompnents/Footer";
import Navbar from "../MainCompnents/Navbar";
// import LogoutIcon from "@mui/icons-material/Logout"
import { mobile } from "../../Responsive/responsive";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import axios from "axios";
import { publicRequest, userRequest } from "../../ReqMethod";
import { Link, useNavigate } from "react-router-dom";
import { removeProduct } from "../../redux/cartRedux";
import OrderDetail from "./orderDetail/OrderDetail";
import { logoutSuccess } from "../../redux/userRedux";

const KEY = process.env.REACT_APP_STRIPE;
console.log(KEY);

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  margin: 20px;
  border: 2px solid black;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  border-color: black;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;

  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;
const RemoveFromCart = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Profile = () => {
  const userDetail = useSelector((state) => state.user.currentUser?.User);
  const cartList = useSelector((state) => state.cart);
  const userID = useSelector((state) => state.user.currentUser.User._id);
  const quantity = useSelector((state) => state.cart.qty);
  const wishQuantity = useSelector((state) => state.wish.qty);

  console.log("cart", quantity);
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log("navigate", navigate);

  const [order, setOrder] = useState([]);

  // const [load, setLoad] = useState(false)

  // console.log("product id ", orderId)

  console.log(order);

  const getStatus = async () => {
    try {
      const response = await userRequest.get(`orders/find/${userDetail._id}`);
      setOrder(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStatus();
  }, []);

  const handelLoggedOut = () => {
    localStorage.clear();
    const logout = null;
    dispatch(logoutSuccess(logout));
    console.log("im logout");
    window.location.href = "/";
  };

  return (
    <Container>
      <Announcemnt />
      <Navbar />

      <Wrapper>
        <div className="user">
          <div className="userTitleContainer">
            <h1 className="userTitle">Profile Detail</h1>
            {/* <Link to="/"> */}
            <button className="userAddButton" onClick={handelLoggedOut}>
              <VpnKey /> Logout
            </button>
            {/* </Link> */}
          </div>
          <div className="userContainer">
            <div className="userShow">
              <div className="userShowTop">
                <img src={userDetail?.img} alt="" className="userShowImg" />
                <div className="userShowTopTitle">
                  <span className="userShowUsername">
                    {userDetail?.username}
                  </span>
                  <span className="userShowUserTitle">
                    {userDetail?.isAdmin ? "Admin" : "User"}
                  </span>
                </div>
              </div>
              <div className="userShowBottom">
                <span className="userShowTitle">Account Details</span>
                <div className="userShowInfo">
                  <PermIdentity className="userShowIcon" />
                  <span className="userShowInfoTitle">
                    {userDetail?.username}
                  </span>
                </div>
                <div className="userShowInfo">
                  <CalendarToday className="userShowIcon" />
                  <span className="userShowInfoTitle">10.12.1999</span>
                </div>
                <span className="userShowTitle">Contact Details</span>
                <div className="userShowInfo">
                  <PhoneAndroid className="userShowIcon" />
                  <span className="userShowInfoTitle">+48 123 456 67</span>
                </div>
                <div className="userShowInfo">
                  <MailOutline className="userShowIcon" />
                  <span className="userShowInfoTitle">{userDetail?.email}</span>
                </div>
                <div className="userShowInfo">
                  <LocationSearching className="userShowIcon" />
                  <span className="userShowInfoTitle">New York | USA</span>
                </div>
              </div>
            </div>
            <div className="userUpdate">
              <span className="userUpdateTitle">Edit</span>
              <form className="userUpdateForm">
                {/* <div className="userUpdateUpload"> */}
                <img className="userUpdateImg" src={userDetail?.img} alt="" />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
                {/* </div> */}
                <div className="userUpdateLeft">
                  <div className="userUpdateItem">
                    <label>Username</label>
                    <input
                      type="text"
                      placeholder={userDetail?.username}
                      className="userUpdateInput"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Full Name</label>
                    <input
                      type="text"
                      placeholder={userDetail?.username}
                      className="userUpdateInput"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Email</label>
                    <input
                      type="text"
                      placeholder={userDetail?.email}
                      className="userUpdateInput"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Phone</label>
                    <input
                      type="text"
                      placeholder="+1 123 456 67"
                      className="userUpdateInput"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Address</label>
                    <input
                      type="text"
                      placeholder="New York | USA"
                      className="userUpdateInput"
                    />
                  </div>
                </div>
                <div className="userUpdateRight">
                  {/* <div className="userUpdateUpload">
                    <img className="userUpdateImg" src={userDetail?.img} alt="" />
                    <label htmlFor="file">
                      <Publish className="userUpdateIcon" />
                    </label>
                    <input type="file" id="file" style={{ display: "none" }} />
                  </div> */}
                  <button className="userUpdateButton">Update</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <OrderDetail order={order} />
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Profile;
