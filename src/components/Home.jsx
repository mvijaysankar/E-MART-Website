import React from 'react'
import DiscountProduct from './DiscountProduct'
import Products from './Products'
import ImageTextSlider from './ImageTextSlider'
import Service from './Service'
import NewArrivals from './NewArrivals'

const Home = () => {
  return (
    <>
    <ImageTextSlider/>
    <Service/>
    <DiscountProduct/>
    <NewArrivals/>
    <Products/>

    </>
  )
}

export default Home