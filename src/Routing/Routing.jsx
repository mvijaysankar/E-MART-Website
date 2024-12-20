import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Shop from '../components/Shop';
import Cart from '../components/Cart';
import ProductDetail from '../components/ProductDetail';
import DiscountProduct from "../components/DiscountProduct";
// import Cart from "../components/Cart";

const Routing = () => {
  return (
    <Routes>
    
      <Route path='/' element={<Home />} />
      <Route path='/Shop' element={<Shop />} />
      <Route path='/Cart' element={<Cart/>}/>
      <Route path="/product/:id" element={<ProductDetail/>} />
      <Route path="/" exact component={<DiscountProduct/>} />
   
    </Routes>
  );
};

export default Routing;
