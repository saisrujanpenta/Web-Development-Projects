import React from "react";
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import "./components/About/About.css" 

function About() {
  return (
    //Navbar
    <>
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
        DreamJob
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <Link to="/home">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#"> Home </a>
            </li></Link>
            <Link to="/about">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#"> About </a>
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

      <Card>
        <Card.Img variant="top" src="https://mdbcdn.b-cdn.net/img/new/slides/010.webp" style={{height:"80vh"}} />
        <Card.Body>
          <Card.Text>
            Our organization helped 548 Photography skilled aspirants to find their dream job!
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card>
      <Card.Img variant="bottom" src="https://mdbcdn.b-cdn.net/img/new/slides/026.webp" style={{height:"90vh"}}/>
        <Card.Body>
          <Card.Text>
          Our organization helped 1123 Cullinary skilled aspirants to find their dream job!
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card>
      <Card.Img variant="bottom" src="https://mdbcdn.b-cdn.net/img/new/slides/036.webp" style={{height:"90vh"}}/>
        <Card.Body>
          <Card.Text>
          Our organization helped 663 Interior Designing skilled aspirants to find their dream job!
          </Card.Text>
        </Card.Body>
      </Card>
    
    </>
    // <div><h1>About Page</h1></div>  
    );
}

export default About;
