import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons"
import React from "react"
import styled from "styled-components"

import { mobile } from "../../Responsive/responsive"

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`
const Logo = styled.h1``
const Description = styled.p`
  margin: 20px 0px;
`
const SocialMediaContainer = styled.div`
  display: flex;
`
const SocialMediaIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  //   color: white;
  //   background-color: white;
`
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`
const Title = styled.h3`
  margin-bottom: 30px;
`
const List = styled.ul`
  margin: 0;
  padding: 0px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`
const Payment = styled.img`
  width: 50%;
`
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Gebya</Logo>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat incidunt ad explicabo maiores. Ipsum reprehenderit error voluptas , nobis, pariatur totam eius deleniti labore, fuga a nihil magnam expedita reiciendis rerum?
        </Description>

        <SocialMediaContainer>
          <SocialMediaIcon>
            <Facebook />
          </SocialMediaIcon>
          <SocialMediaIcon>
            <Instagram />
          </SocialMediaIcon>
          <SocialMediaIcon>
            <Twitter />
          </SocialMediaIcon>
          <SocialMediaIcon>
            <Pinterest />
          </SocialMediaIcon>
        </SocialMediaContainer>
      </Left>

      <Center>
        <Title> Links </Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> Adama Mickiwieciza 93 87-100 , Torun-Poland
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +48 579 298 192
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> contact@gebya.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  )
}

export default Footer
