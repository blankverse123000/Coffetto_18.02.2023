import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Steps = () => {
  return (
    <div
      className=" steps-section section-rounder bg-primary"
      style={{ transform: "translateY(-30px)" }}
      id="steps"
    >
      <Container>
        <h1 className=" text-center py-5 position-relative">
          Steps of manufacturing our products
        </h1>
        <img
          className=" step-border  "
          src="./img/steps-curve-line.svg"
          alt=" steps-curve-line.svg"
        />
        <Row className=" gap-4 justify-content-center align-items-center">
          <Col sm={12} md={10} lg={3}>
            <div
              className=" 
              step step-1 rounded-circle bg-light  d-flex justify-content-center align-items-center p-3 "
            >
              <span
                className=" badge p-3 bg-secondary rounded-circle border border-5 border-primary fs-3 position-absolute "
                style={{ transform: "translate(-70px, -70px)" }}
              >
                01
              </span>
              <img
                className="step-img my-auto  w-75"
                src="./img/steps-green-coffee.png"
                alt=""
              />
            </div>
            <p className=" py-4">
              Harvest occurs annually when the
              <br /> coffee beans reach maturity and <br /> are collected for
              processing.
            </p>
          </Col>

          <Col sm={12} md={10} lg={3} className="d-flex align-self-end ">
            <Row
              xs={1}
              className="ms-auto d-flex flex-column-reverse flex-lg-row me-3"
            >
              <Col>
                <p className=" py-4">
                  The beans are dried using a wet <br /> or dry technique,
                  depending on <br /> the taste we want to obtain.
                </p>
              </Col>
              <Col>
                <div
                  className=" 
              step step-2 rounded-circle bg-light  d-flex justify-content-center align-items-center  p-3"
                >
                  <span
                    className=" badge p-3 bg-secondary rounded-circle border border-5 border-primary fs-3 position-absolute "
                    style={{ transform: "translate(-70px, -70px)" }}
                  >
                    02
                  </span>
                  <img
                    className="step-img my-auto  w-75"
                    src="./img/steps-coffee-beans.png"
                    alt=""
                  />
                </div>
              </Col>
            </Row>
          </Col>
          <Col sm={12} md={10} lg={3}>
            <div
              className=" 
              step step-3 rounded-circle bg-light  d-flex justify-content-center align-items-center   p-3"
            >
              <span
                className=" badge p-3 bg-secondary rounded-circle border border-5 border-primary fs-3 position-absolute "
                style={{ transform: "translate(-70px, -70px)" }}
              >
                03
              </span>
              <img
                className="step-img my-auto  w-75"
                src="./img/steps-ground-coffee.png"
                alt=""
              />
            </div>
            <p className=" py-4">
              The coffee is roasted and <br /> acquires its flavor by processing
              <br /> the grain in ovens.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Steps;
