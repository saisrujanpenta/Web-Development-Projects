import React from "react";
import {Link} from 'react-router-dom';

function Contact() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          FoodX
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <Link to="/home">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#"> Home </a>
            </li></Link>
            <Link to="/about">
            <li className="nav-item">
              <a className="nav-link" href="#"> About </a>
            </li></Link>
            <Link to="/jobs">
            <li className="nav-item">
              <a className="nav-link" href="#"> Jobs </a>
            </li></Link>
            <Link to="/contact">
            <li className="nav-item">
              <a className="nav-link" href="#"> Contact Us </a>
            </li></Link>
          </ul>
        </div>
      </div>
    </nav>
    <h1>Contact Page</h1>
    </>
  );
}

export default Contact;