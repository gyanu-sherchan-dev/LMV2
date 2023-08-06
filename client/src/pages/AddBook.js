import React, { useState } from "react";
import MainLayout from "../layout/MainLayout";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { FaBook, FaBookOpen } from "react-icons/fa";
import BookCard from "../components/bookCard";
import FormComponent from "../components/form/FormComponent";
import { useDispatch } from "react-redux";
import { addBookAction } from "../redux/BookRedux/BookAction";

const AddBooks = () => {
  const dispatch = useDispatch();
  const inputs = [
    {
      label: "Book Title",
      name: "name",
      required: true,
      type: "text",
      placeholder: "Rich Dad Poor Dad",
    },
    {
      label: "Description",
      name: "description",
      required: true,
      type: "text",
      placeholder: "Write Book Description Here",
    },
    {
      label: "Author",
      name: "author",
      required: true,
      type: "text",
      placeholder: "John Doe",
    },
    {
      label: "ISBN",
      name: "isbn",
      required: true,
      type: "text",
      placeholder: "enter Isbn",
    },
    {
      label: "Book Image",
      name: "bookImage",
      required: true,
      type: "text",
      placeholder: "enter img url",
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
    dispatch(addBookAction(formData));
  };

  return (
    <MainLayout className="dashboard">
      <Container>
        <div className="dashboard-content p-4 ">
          <h2 className="fw-bold text-center">Add Book</h2>
        </div>
        <div>
          <div className="d-flex justify-content-center mt-5">
            <Form onSubmit={handleOnSubmit}>
              {inputs.map((item, i) => {
                return (
                  <FormComponent key={i} {...item} onChange={handleOnChange} />
                );
              })}
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </Container>
    </MainLayout>
  );
};

export default AddBooks;
