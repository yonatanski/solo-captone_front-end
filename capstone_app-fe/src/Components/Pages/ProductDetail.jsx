import { Add, FavoriteBorder, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Footer from "../MainCompnents/Footer";
import Navbar from "../MainCompnents/Navbar";
import Newsletter from "../MainCompnents/Newsletter";
import Announcemnt from "../MainCompnents/Announcemnt";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { mobile } from "../../Responsive/responsive";
import axios from "axios";
import { addProduct } from "../../redux/cartRedux";

import { useDispatch } from "react-redux";
import { addProductwishList } from "../../redux/wishListRedux";
import { publicRequest } from "../../ReqMethod";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 30px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 2;
  ${mobile({ flex: "1" })}
`;

const Image = styled.img`
  width: 450px;
  height: 600;
  object-fit: cover;
  ${mobile({ height: "70vh", width: "100%" })}
`;
const LitleImage = styled.img`
  width: 100px;
  height: 160px;
  margin: 5px;
  object-fit: cover;
  ${mobile({ width: "50px", height: "120px" })}
`;

const InfoContainer = styled.div`
  flex: 3;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;
const LittleIMgContainer = styled.div`
  flex: 3;
  padding: 0px 50px;
  ${mobile({ padding: "10px", flex: "4", flexDirection: "row" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

// const FilterColor = styled.div`
//   width: 20px;
//   height: 20px;
//   border-radius: 50%;
//   background-color: ${(props) => props.color};
//   margin: 0px 5px;
//   cursor: pointer;
// `;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: #0d0d0d;
  color: #fff;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #191717;
  }
`;
const SelcetdImage = styled.div`
  display: flex;
`;

const ProductDetail = () => {
  const location = useLocation();
  const productID = location.pathname.split("/")[2];
  console.log(productID);
  const [selectedImg, setSelectedImg] = useState(0);
  const [productsDetial, setProductsDetial] = useState([]);
  const [qty, setQty] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    getSingleProducts();
  }, [productID]);

  const getSingleProducts = async () => {
    try {
      const response = await publicRequest.get(`products/${productID}`);
      console.log(response);
      setProductsDetial(response.data);
    } catch (error) {}
  };
  const handleQuantity = (type) => {
    if (type === "+") {
      qty > 1 && setQty(qty - 1);
    } else {
      setQty(qty + 1);
    }
  };
  const handleAddToCart = () => {
    dispatch(addProduct({ ...productsDetial, qty, color, size }));
  };
  const handleAddToWishList = () => {
    dispatch(addProductwishList(productsDetial));
  };
  return (
    <Container>
      <Announcemnt />
      <Navbar />

      <Wrapper>
        <ImgContainer>
          {productsDetial.img && (
            <Image src={productsDetial.img[selectedImg]} />
          )}
        </ImgContainer>
        <LittleIMgContainer>
          {productsDetial?.img?.map((image, i) => (
            <LitleImage
              style={{
                border: selectedImg === i ? "5px solid black" : "none",
              }}
              width="10px"
              src={image}
              onClick={() => setSelectedImg(i)}
            />
          ))}
        </LittleIMgContainer>

        <InfoContainer>
          <Title>{productsDetial.title}</Title>
          <Desc>{productsDetial.desc}</Desc>
          <Price> {productsDetial.price}$</Price>
          <FilterContainer>
            {/* <Filter>
              <FilterTitle>Color</FilterTitle>
              {productsDetial.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}
            </Filter> */}
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterSize onChange={(e) => setColor(e.target.value)}>
                {productsDetial.color?.map((c) => (
                  <FilterSizeOption key={c}>{c}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
            {/* <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterSize value={color} defaultValue={"default"} onChange={(e) => setColor(e.target.value)}>
                <FilterSizeOption value={"default"} disabled>
                  Color
                </FilterSizeOption>
                {productsDetial.color?.map((c, i) => (
                  <>
                    <FilterSizeOption value={c} key={c}>
                      {c}
                    </FilterSizeOption>
                  </>
                ))}
              </FilterSize>
            </Filter> */}

            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {productsDetial.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("+")} />
              <Amount>{qty}</Amount>
              <Add onClick={() => handleQuantity("-")} />
            </AmountContainer>
            <Button onClick={handleAddToCart}>ADD TO CART</Button>
            <FavoriteBorder
              onClick={handleAddToWishList}
              color="primary"
              fontSize="large"
            />
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      {/* {productsDetial?.img?.map((image, i) => (
        <LitleImage
          style={{ border: selectedImg === i ? "5px solid black" : "none" }}
          width="10px"
          src={image}
          onClick={() => setSelectedImg(i)}
        />
      ))} */}

      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductDetail;
