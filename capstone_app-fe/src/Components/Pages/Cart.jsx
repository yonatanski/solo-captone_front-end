import { Add, Remove, RemoveCircle } from "@material-ui/icons";
import styled from "styled-components";
import Announcemnt from "../MainCompnents/Announcemnt";
import Footer from "../MainCompnents/Footer";
import Navbar from "../MainCompnents//Navbar";
import { mobile } from "../../Responsive/responsive";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import axios from "axios";
import { publicRequest, userRequest } from "../../ReqMethod";
import { Link, useNavigate } from "react-router-dom";
import { removeProduct } from "../../redux/cartRedux";

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
  ${mobile({ flex: "2" })}
`;

const Image = styled.img`
  width: 200px;
  ${mobile({ width: "100px" })}
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span`
  ${mobile({ fontSize: "10px" })}
`;

// const ProductColor = styled.div`
//   width: 20px;

//   height: 20px;
//   border-radius: 50%;
//   background-color: ${(props) => props.color};
// `

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

const Cart = () => {
  const cartList = useSelector((state) => state.cart);
  const userID = useSelector((state) => state.user.currentUser?.User._id);
  const userIDforCheckout = useSelector((state) => state.user.currentUser);
  const quantity = useSelector((state) => state.cart.qty);
  const wishQuantity = useSelector((state) => state.wish.qty);

  console.log("cart", quantity);
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log("navigate", navigate);

  const onToken = (token) => {
    setStripeToken(token);
  };
  console.log("stripeToken", stripeToken);
  useEffect(() => {
    const payment = async () => {
      try {
        const response = await userRequest.post(`/checkout/payment`, {
          tokenId: stripeToken.id,
          amount: 50000, //cartList.total * 100,
        });
        navigate("/success", {
          state: {
            address: response.data,
            products: cartList,
            userId: userID,
            amount: cartList.total,
          },
        });
      } catch (error) {}
    };
    stripeToken && payment();
  }, [stripeToken, cartList.total]);

  // const handleChekOutLOgdin = () => {
  //   if (!userIDforCheckout) {
  //     navigate("/login")
  //   }
  // }

  const handleRemoveFromCart = (product) => {
    dispatch(removeProduct(product));
  };
  return (
    <Container>
      <Announcemnt />
      <Navbar />

      <Wrapper>
        <Title>YOUR CART</Title>
        <Top>
          <Link to={`/`}>
            <TopButton>CONTINUE SHOPPING</TopButton>
          </Link>
          <TopTexts>
            <TopText>Shopping Cart({quantity})</TopText>
            <Link to={`/favourite`}>
              <TopText>Your Wishlist ({wishQuantity})</TopText>
            </Link>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cartList.products.map((product, i) => (
              <Product key={i}>
                <ProductDetail>
                  <Link to={`/product/${product._id}`}>
                    <Image src={product.img[0]} />
                  </Link>
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {product._id}
                    </ProductId>
                    <ProductSize>
                      <b>Color:</b> {product.color}
                    </ProductSize>

                    <ProductSize>
                      <b>Size:</b> {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>{product.qty}</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>$ {product.price * product.qty}</ProductPrice>
                </PriceDetail>
                <RemoveFromCart>
                  <RemoveCircle
                    style={{ color: "red" }}
                    fontSize="large"
                    onClick={() => handleRemoveFromCart(product)}
                  />
                </RemoveFromCart>
              </Product>
            ))}
            <Hr />
          </Info>
          {quantity !== 0 && (
            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>{cartList.total}</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Estimated Shipping</SummaryItemText>
                <SummaryItemPrice>$ 5.90</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Shipping Discount</SummaryItemText>
                <SummaryItemPrice>$ -5.90</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>{cartList.total}</SummaryItemPrice>
              </SummaryItem>
              <StripeCheckout
                name="Gebeya Shop"
                image="https://cdn.w600.comps.canstockphoto.com/market-logo-clipart-vector_csp11482053.jpg"
                billingAddress
                shippingAddress
                description={`Your total is $${cartList.total}`}
                amount={cartList.total * 100}
                token={onToken}
                stripeKey={KEY}
              >
                <Button
                  style={{
                    border: userIDforCheckout ? "none" : "2px solid red",
                  }}
                  disabled={userIDforCheckout ? false : true}
                >
                  {userIDforCheckout
                    ? "CHEKOUT NOW"
                    : "SIGN IN/LOGIN TO CHECK OUT"}
                </Button>
              </StripeCheckout>
            </Summary>
          )}
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
