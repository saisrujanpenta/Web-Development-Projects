import React from "react";
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
// import "./reactapp/About/About.css";
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import ProgressBar from 'react-bootstrap/ProgressBar';


function Home() {
  let navigate = useNavigate(); 
  const servicespage = () =>{ 
    let path = `/contact`; 
    navigate(path);
  }

  const Navbar = {
    textDecoration: 'none'
  }

  const Logo = {
    color: "purple",
    fontWeight: 'bold'
  }

  const purpletext = {
    color: "purple",
  }

  const team1 = {
    flexDirection:'row', 
    flexWrap:'wrap',
    paddingTop: "40px", 
    paddingLeft: "40px",
    paddingBottom: "40px",
    paddingRight: "90px"
  }

  const Titletextbar = {
    paddingTop: "50px",
    paddingLeft: "20px",
    textAlign: "center",
    backgroundColor: "rgb(247, 251, 255)"
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
      <br></br><br></br>
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={Logo}>
          FOODX
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <Link style={Navbar} to="/home">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#"> Home </a>
            </li></Link>
            <Link style={Navbar} to="/about">
            <li className="nav-item">
              <a className="nav-link" href="#"> About </a>
            </li></Link>
            <Link style={Navbar} to="/jobs">
            <li className="nav-item">
              <a className="nav-link " href="#"> Services </a>
            </li></Link>
            <Link style={Navbar} to="/contact">
            <li className="nav-item">
              <a className="nav-link" href="#"> Contact Us </a>
            </li></Link>
          </ul>
        </div>
      </div>
      <br></br><br></br>
    </nav>

  <div className="Titletext" style={Titletextbar}>
    <h2><b style={purpletext}>Fresh</b> Food <br></br> Creative Catering</h2>
    <h5>Harnessing the science of nature, we're taking it back to basics with ecofriendly,<br></br>
      ethically-sourced, and earth-derived ingredients so that your beauty shines from the<br></br>
      inside. No harsh chemicals.</h5>
      <br></br>
      <Button style={purpletext} variant="outline-dark" onClick={servicespage}>Explore!</Button>
  </div>

  <div className="img">
    <img src="./Assets/I1.jpg" alt="" width="100%" height="300%"></img>

  </div>

  <div className="team">
    <div className="nextHeader"> <br></br><br></br>
      <h2><i>Our Team</i></h2>
    </div>

    <div className="col-sm-6 col-md-4 team1">
      <img src="Assets/Team1.jpg" className="rounded-circle" alt="Cinque Terre"></img>
      <h4 >Mahesh</h4>
      <p >Lead Designer</p>
    </div>

    <div className="col-sm-6 col-md-4 team1">
      <img src="Assets/Team2.jpg" className="rounded-circle" alt="Cinque Terre"></img>
      <h4 >Anda</h4>
      <p >Product Manager</p>
    </div>

    <div className="col-sm-6 col-md-4 team1">
      <img src="Assets/Team3.jpg" className="rounded-circle" alt="Cinque Terre"></img>
      <h4 >William</h4>
      <p >Senior Engineer</p>
    </div>
  </div>

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

      
    <h3 style={Headers}>Growth over Years!</h3><br />

    <div>
      2018
      <ProgressBar striped variant="dark" now={40} /><br />
      2019
      <ProgressBar striped variant="dark" now={20} /><br />
      2020
      <ProgressBar striped variant="dark" now={60} /><br />
      2021
      <ProgressBar striped variant="dark" now={80} /><br />
    </div><br />

    <h3 style={Headers}>Customer Reviews</h3>

    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Hagrid | Wedding Photgrapher</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Hermoine | Chef</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Harry Potter | Video Editor</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
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
    </Card><br />

    

    </>  
  );
}

export default Home;
