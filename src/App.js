import React from 'react'
import Header from './components/Header'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Routing from './Routing/Routing'
import Footer from './components/Footer'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from 'react';





const App = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <>
    <Header/>
    <Routing/>
    <Footer/>
    
    </>
  )
}

export default App
