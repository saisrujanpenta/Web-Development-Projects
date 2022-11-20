import React from "react";
import {Link} from 'react-router-dom';
// import "./reactapp/About/About.css";
import Carousel from 'react-bootstrap/Carousel';

function Home() {
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

    <Carousel interval={2000} className="carousel">
      <Carousel.Item className="carousel">
        <img
          className="d-block w-100"
          src="https://www.momji.fr/jobs/sites/jobs/files/inline-images/recruitment.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Job Search ends here!</h3>
          <p>Multitude no of jobs available from our website.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel">
        <img
          className="d-block w-100"
          src="https://www.daviecountyblog.com/wp-content/uploads/2020/05/D_C-Blog-JObs-Page-Image.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Open Source and Start Up Jobs</h3>
          <p>Work for the world famous start up jobs as well as work with open source community.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel">
        <img
          className="d-block w-100"
          src="https://24j1q8gzma4rsuat1tbzospi-wpengine.netdna-ssl.com/wp-content/uploads/2019/02/jobs-hiring-help-wanter.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Jobs with varying diversity</h3>
          <p>There is no limit when it comes to recruiting diverse culture from our portal.</p>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
    </>  
  );
}

export default Home;
