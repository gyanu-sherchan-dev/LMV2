import React, { useEffect } from "react";
import MainLayout from "../layout/MainLayout";
import { Col, Container, Row } from "react-bootstrap";
import { FaBook, FaBookOpen } from "react-icons/fa";
import BookCard from "../components/bookCard";
import { useDispatch } from "react-redux";
import { getBookAction } from "../redux/BookRedux/BookAction";

const AllBooks = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBookAction());
  }, [dispatch]);
  return (
    <MainLayout className="dashboard">
      <Container>
        <div className="dashboard-content p-4 ">
          <h2 className="fw-bold text-center">All Books</h2>
        </div>
        <div>
          <Row className="gap-5 mt-5">
            <BookCard />
          </Row>
        </div>
      </Container>
    </MainLayout>
  );
};

export default AllBooks;
