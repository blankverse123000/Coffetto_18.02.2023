import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Testimonial = () => {
  return (
    <div className=" section-rounder bg-white  py-5" id="testimonial">
      <Container>
        <Row className=" justify-content-center align-items-center gap-5">
          <Col sm={12} lg={5}>
            <h1 className="text-dark py-5 ">
              Coffee is the best drink in the morning, it keeps you focused.
            </h1>
            <p className=" text-black-50"> Jhon Doe</p>
          </Col>
          <Col className=" py-5">
            <img
              className=" rounded-5 w-100"
              src="./img/testimonial-coffee.png"
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Testimonial;
