import React, { useState } from "react";
import { Col, Form, Row, Button, Container } from "react-bootstrap";
import FormComponent from "../components/form/FormComponent";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { registerUserAction } from "../redux/userRedux/userAction";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputs = [
    {
      label: "User Name",
      name: "name",
      required: true,
      type: "text",
      placeholder: "Jane Doe",
    },
    {
      label: "Email",
      name: "email",
      required: true,
      type: "email",
      placeholder: "Jane@gmail.com",
    },
    {
      label: "Password",
      name: "password",
      required: true,
      type: "password",
      placeholder: "*****",
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      required: true,
      type: "password",
      placeholder: "*****",
    },
  ];

  const [formData, setFormData] = useState({});

  const handleOnChange = (e) => {
    const { value, name } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };
  console.log(formData);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { confirmPassword, ...rest } = formData;
    if (confirmPassword !== rest.password) {
      return window.alert("Password do not matched");
    }
    dispatch(registerUserAction(rest)) && navigate("/");
  };

  return (
    <div className="main1">
      <Container className="main">
        <Row className="p-5  rounded">
          <Link to="/" className="nav-link">
            <FaArrowLeft size={30} /> Go Back
          </Link>

          <Col className="d-flex justify-content-center align-items-center p-5">
            <div className="d-flex  pt-5 flex-column justify-contain-center align-items-center">
              <h1 className="p3 pb-4 fw-bold">Library Management</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </Col>
          <Col className="p-5 shadow-lg rounded">
            <Form onSubmit={handleOnSubmit}>
              {inputs.map((item, i) => (
                <FormComponent key={i} {...item} onChange={handleOnChange} />
              ))}
              <Form.Group className="mb-3" onChange={handleOnChange}>
                <Form.Label>Select Role</Form.Label>
                <Form.Select aria-label="Default select example" name="role">
                  <option>Choose</option>
                  <option value="student">Student</option>
                  <option value="teacher">Teacher</option>
                </Form.Select>
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            <div>
              <Link to="/" className="nav-link text-end fw-bold">
                Login here !
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
