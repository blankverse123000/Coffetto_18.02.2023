import React from "react";
import { Container } from "react-bootstrap";
import Product from "./components/Product";

const Home = () => {
  return (
    <div className="">
      <Container className=" my-5" id="home">
        <div
          className=" 
          d-flex
          flex-column-reverse  flex-lg-row justify-content-center align-items-center mt-4 pt-4
      "
        >
          <div className="col-lg-6 col-12">
            <img className=" w-100" src="./img/home-coffee.png" alt="" />
          </div>
          <div className="col-lg-6 col-12">
            <p className=" text-secondary">EXCEPTIONAL QUALITY</p>
            <h4 className=" display-2 text-nowrap">
              It's time for a <br />
              good coffee
              <img className=" w-25" src="./img/home-coffee-title.png" alt="" />
            </h4>
            <p className=" text-wrap">
              Each select coffee bean reflects our commitment to Peruvian coffee
              growers, who bring the best select coffee to your table.
            </p>
            <button className=" homBtn btn btn-secondary rounded-pill">
              Get Started
              <i className="ps-2 bi bi-chevron-right homBtn-icon"></i>
            </button>
          </div>
        </div>
      </Container>
      <Product />
    </div>
  );
};

export default Home;
