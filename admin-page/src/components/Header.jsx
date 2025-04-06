import React from "react";
import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function Header() {
  return (
    <div style={{ padding: 10 }}>
      <Row>
        <Col md={6} style={{ display: "flex", alignItems: "center" }}>
          <h3 style={{ color: "rgb(240, 93, 143)", margin: 0 }}>Dashboard</h3>
        </Col>
        <Col md={6}>
          <Row>
            <Col
              md={7}
              style={{ padding: 10, display: "flex", alignItems: "center" }}
            >
              <InputGroup>
                <InputGroup.Text id="basic-addon1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    style={{ fill: " rgba(0, 0, 0, 1)" }}
                  >
                    <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
                  </svg>
                </InputGroup.Text>
                <Form.Control
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </Col>
            <Col
              md={5}
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                padding: 10,
              }}
            >
              <img
                src="images/Bell 1.png"
                alt=""
                style={{ width: 30, height: 30, padding: 0 }}
              />
              <img
                src="images/Question 1.png"
                alt=""
                style={{ width: 30, height: 30, padding: 0 }}
              />
              <img
                src="images/Avatar 313.png"
                alt=""
                style={{ width: 30, height: 30, padding: 0 }}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Header;
