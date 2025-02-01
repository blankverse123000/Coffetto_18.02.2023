import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <div
      className=" bg-white py-5 section-rounder"
      style={{ transform: "translateY(-10px)" }}
      id="about"
    >
      <Container>
        <Row className=" d-flex justify-content-center align-items-center">
          <Col lg={6}>
            <img
              className=" w-100 rounded-4"
              src="./img/about-coffee.png"
              alt=""
            />
          </Col>
          <Col lg={{ span: 5, offset: 1 }} className=" text-primary mt-4">
            <h1 className=" display-1">Our History</h1>
            <p className=" ">
              We make and grow the best coffee in Peru, accompanying families
              since 1930, with professional workers who harvest, collect and
              select the coffee with quality work, thus providing exquisite
              coffee to enjoy together as a family.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
