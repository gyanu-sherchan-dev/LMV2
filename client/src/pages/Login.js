import React from "react";
import { Col, Form, Row, Button, Container } from "react-bootstrap";
import FormComponent from "../components/form/FormComponent";
import { Link } from "react-router-dom";

const Login = () => {
  const inputs = [
    {
      label: "Email",
      name: "email",
      required: true,
      type: "email",
      placeholder: "Jane@gmail.clom",
    },
    {
      label: "Password",
      name: "password",
      required: true,
      type: "password",
      placeholder: "*****",
    },
  ];
  return (
    <div className="main1">
      <Container className="main">
        <Row className="p-5 shadow-lg rounded">
          <Col>
            <div className="d-flex  pt-5 flex-column justify-contain-center align-items-center">
              <h1 className="p3 pb-4 fw-bold">Library Management</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </Col>
          <Col className="p-5 shadow-lg rounded">
            <Form>
              {inputs.map((item, i) => (
                <FormComponent key={i} {...item} />
              ))}
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            <div>
              <Link to="/register" className="nav-link text-end fw-bold">
                Register here !
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
