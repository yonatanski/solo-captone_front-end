import React, { useState } from "react"
import { Search, ShoppingCartOutlined, FavoriteBorder } from "@material-ui/icons"
import { mobile } from "../../Responsive/responsive"
import styled from "styled-components"
import { Badge } from "@material-ui/core"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Container = styled.div`
  height: 60px;
  background-color: #000000;
  color: #fff;

  position: sticky;
  top: 0;
  z-index: 1;
  ${mobile({ height: "55px" })};
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "3px 0px" })}
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
// const Language = styled.div`
//   font-size: 14px;
//   ${mobile({ display: "none" })}
// `
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`
const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`

const Center = styled.div`
  flex: 1;
  text-align: center;
`
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "16px" })}
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 4, justifyContent: "center" })}
`
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "10px", marginLeft: "12px" })}
`
const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  ${mobile({ width: "25px", height: "25px" })}
`
const Navbar = () => {
  const quantity = useSelector((state) => state.cart.qty)
  const wishQuantity = useSelector((state) => state.wish.qty)
  console.log("cart", quantity)
  // const [loggedIn, setLogdin] = useState(true)
  const user = useSelector((state) => state.user.currentUser)
  const loggedInUser = useSelector((state) => state.user.currentUser?.User)
  return (
    <Container>
      <Wrapper>
        <Left>
          {/* <Language>EN</Language> */}
          <SearchContainer>
            <Input />
            <Search style={{ color: "gray", fontSize: 25 }} />
          </SearchContainer>
        </Left>

        <Center>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Logo>Gebya</Logo>
          </Link>
        </Center>
        <Right>
          {!user ? (
            <>
              <Link to={`/register`} style={{ textDecoration: "none", color: "inherit" }}>
                <MenuItem>REGISTER</MenuItem>
              </Link>
              <Link to={`/login`} style={{ textDecoration: "none", color: "inherit" }}>
                <MenuItem>SIGN IN</MenuItem>
              </Link>
            </>
          ) : (
            <>
              <Link to={`/profile/me`} style={{ textDecoration: "none", color: "inherit" }}>
                <ProfileImage src={loggedInUser.img} />
              </Link>
              <Link to={`/profile/me`} style={{ textDecoration: "none", color: "inherit" }}>
                <MenuItem>{loggedInUser.username}</MenuItem>
              </Link>
            </>
          )}
          <Link to={`/favourite`}>
            <MenuItem>
              <Badge badgeContent={wishQuantity} color="primary">
                <FavoriteBorder style={{ color: "white" }} fontSize="large" />
              </Badge>
            </MenuItem>
          </Link>

          <Link to={`/cart`}>
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined style={{ color: "red" }} fontSize="large" />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
