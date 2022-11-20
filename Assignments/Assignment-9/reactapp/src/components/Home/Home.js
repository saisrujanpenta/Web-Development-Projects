import React from "react";
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
// import "./reactapp/About/About.css";
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Home() {
  let navigate = useNavigate(); 
  const servicespage = () =>{ 
    let path = `/contact`; 
    navigate(path);
  }

  const Headers = {
    color: "#100F0F",
    backgroundColor: "#F7F7F7",
    padding: "30px",
    fontFamily: "Arial",
    textAlign: "center"
  };
  return (
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
              <a className="nav-link active" aria-current="page" href="#"> Home </a>
            </li></Link>
            <Link to="/about">
            <li className="nav-item">
              <a className="nav-link" href="#"> About </a>
            </li></Link>
            <Link to="/jobs">
            <li className="nav-item">
              <a className="nav-link " href="#"> Jobs </a>
            </li></Link>
            <Link to="/contact">
            <li className="nav-item">
              <a className="nav-link" href="#"> Contact Us </a>
            </li></Link>
          </ul>
        </div>
      </div>
    </nav>

    <Carousel interval={2000} className="carousel">
      <Carousel.Item className="carousel" style={{height:"90vh"}}>
        <img
          className="d-block w-100"
          src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Job Search ends here!</h3>
          <p>Have Photography skills? Come contact us!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel" style={{height:"90vh"}}>
        <img
          className="d-block w-100"
          src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Job Search ends here!</h3>
          <p>Want to pursue career in cullinary industry? Contact us!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel" style={{height:"90vh"}}>
        <img
          className="d-block w-100"
          src="https://mdbcdn.b-cdn.net/img/new/slides/009.webp"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Job Search ends here!</h3>
          <p>Get your dream Interior Designer job!</p>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>

      <h3 style={Headers}>Services We Provide!</h3>
      
      <Card>
      <Card.Header>Services</Card.Header>
      <Card.Body>
        <Card.Title>We are good at so many things. Come Check us out!</Card.Title>
        <Card.Text>
          Find your drea job with us.
        </Card.Text>
        <Button variant="dark" onClick={servicespage}>Contact us for our Services!</Button>
      </Card.Body>
    </Card>
    </>  
  );
}

export default Home;
