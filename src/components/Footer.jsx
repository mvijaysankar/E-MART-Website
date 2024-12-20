import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { AiFillShopping } from "react-icons/ai";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#003366' }} className="text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h4 className='fw-bold'><AiFillShopping />Mart</h4>
            <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus tenetur quaerat quas sed repellendus porro rem exercitationem accusamus aliquam numquam reprehenderit tempora.</p>
          </div>

          <div className="col-md-3">
            <h5>About</h5>
            <ul className="list-unstyled">
              <li><Link to="#" className="text-secondary text-decoration-none">Careers</Link></li>
              <li><Link to="#" className="text-secondary text-decoration-none">Our Stores</Link></li>
              <li><Link to="#" className="text-secondary text-decoration-none">Our Cares</Link></li>
              <li><Link to="#" className="text-secondary text-decoration-none">Terms & Conditions</Link></li>
              <li><Link to="#" className="text-secondary text-decoration-none">Privacy Policy</Link></li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5>Customer Care</h5>
            <ul className="list-unstyled">
              <li><Link to="#" className="text-secondary text-decoration-none">Help Center</Link></li>
              <li><Link to="#" className="text-secondary text-decoration-none">How to Buy</Link></li>
              <li><Link to="#" className="text-secondary text-decoration-none">Track Your Order</Link></li>
              <li><Link to="#" className="text-secondary text-decoration-none">Corporate & Bulk Purchasing</Link></li>
              <li><Link to="#" className="text-secondary text-decoration-none">Returns & Refunds</Link></li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5>Contact Us</h5>
            <p className='text-secondary'>70 Washington Square South, New York, NY 10012, United States</p>
            <p className='text-secondary'>Email: example@gmail.com</p>
            <p className='text-secondary'>+1 123 456 7890</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
