import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser } from "react-icons/fa";
import Ait from "../Images/achieversIT.png"; 
import './Header.css';

const Header = () => {

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-white box-shadow">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={Ait} alt="ait" width="120px" height="50" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active text-dark fw-bold"
                aria-current="page"
                to="/"
                onClick={scrollToTop} // Scroll to top when clicked
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark fw-bold" to="/Shop">
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark fw-bold" to="/Cart">
                Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark fw-bold" to="/">
                <FaUser />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark fw-bold" to="/Cart">
                <FaShoppingCart />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
