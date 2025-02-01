import React from "react";
import { Col, Container, Row, Button, Form } from "react-bootstrap";

const Footer = () => {
  return (
    <div
      className=" section-rounder bg-dark py-5"
      style={{ transform: "translateY(-15px)" }}
    >
      <Container>
        <Row className=" my-5">
          <Col lg={6} sm={12} className=" my-4 ">
            <div>
              <img className=" footer-logo" src="./img/logo.png" alt="" />
              <span
                className=" h5
              align-middle"
              >
                Coffetto
              </span>
            </div>
            <h4 className=" my-4">Sign up for our newsletter</h4>
          </Col>
          <Col lg={{ span: 5, offset: 1 }} sm={12} className="d-grid gap-3 ">
            <Form.Control
              className=" bg-transparent rounded-pill"
              type="email"
              placeholder="Enter e-mail address"
            />
            <Button
              className="  homBtn rounded-pill
             "
              variant="secondary"
            >
              submit
              <i className="ps-2 bi bi-chevron-right homBtn-icon"></i>
            </Button>
            <p>
              We care about your data. Read our
              <Button variant="link" className="  text-decoration-none ">
                Privacy Policy
              </Button>
            </p>
          </Col>
        </Row>
        <ul className=" list-unstyled d-flex justify-content-center align-content-center my-5">
          <li className=" ">
            <Button variant="link " className=" text-decoration-none">
              <i className="bi bi-facebook"></i>
            </Button>
          </li>
          <li className=" ">
            <Button variant="link" className=" text-decoration-none">
              <i className="bi bi-instagram"></i>
            </Button>
          </li>
          <li className=" ">
            <Button variant="link" className=" text-decoration-none">
              <i className="bi bi-twitter"></i>
            </Button>
          </li>
        </ul>
        <Row>
          <Col>
            <p className=" text-center">
              &#169; Copyright BlankVerse. All rights reserved
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
