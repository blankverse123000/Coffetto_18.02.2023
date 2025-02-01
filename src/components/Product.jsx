import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Product = () => {
  return (
    <div className=" bg-light py-5 section-rounder ">
      <Container className=" mb-4">
        <Row className=" gap-4">
          <Col lg={{ span: 3, offset: 1 }}>
            <button className=" btn btn-primary rounded-pill mb-4 productBtn">
              Scroll Down
              <i className="ms-2 bi bi-chevron-down"></i>
            </button>
            <p>
              We strive to form deep partnerships with farmers from all over the
              world to create perspective together and form healthy working
              relationships built on trust and respect.
            </p>
          </Col>
          <Col lg={{ span: 6, offset: 1 }}>
            <Row className=" gap-2">
              <Col className=" text-center productCoffee">
                <img
                  style={{ width: "80px" }}
                  className="productCoffee-img"
                  src="./img/product-coffee-1.png"
                  alt=""
                />
                <h5>Classic Coffee</h5>
                <span className=" h5">$17.90</span>
              </Col>
              <Col className=" text-center productCoffee">
                <img
                  style={{ width: "80px" }}
                  className="productCoffee-img"
                  src="./img/product-coffee-2.png"
                  alt=""
                />
                <h5>Black Coffee</h5>
                <span className=" h5">$24.90</span>
              </Col>
              <Col className=" text-center productCoffee">
                <img
                  style={{ width: "80px" }}
                  className="productCoffee-img"
                  src="./img/product-coffee-2.png"
                  alt=""
                />
                <h5>Strong Coffee</h5>
                <span className=" h5">$32.90</span>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Product;
