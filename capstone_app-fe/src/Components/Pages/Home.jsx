import React from "react"
import Announcemnt from "../MainCompnents/Announcemnt"
import Catagories from "../MainCompnents/Catagories"
import Footer from "../MainCompnents/Footer"
import JamboSlider from "../MainCompnents/JamboSlider"
import Navbar from "../MainCompnents/Navbar"
import Newsletter from "../MainCompnents/Newsletter"
import Products from "../MainCompnents/Products"


const Home = () => {
  return (
    <div>
  
      <Announcemnt />
      <Navbar />
      <JamboSlider />
      <Catagories />
      
      <Products />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home
