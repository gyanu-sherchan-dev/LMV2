import React from "react";
import MainLayout from "../layout/MainLayout";
import { MdNotifications } from "react-icons/md";
import { Col, Container, Row } from "react-bootstrap";
import { FaBook, FaBookOpen } from "react-icons/fa";

const Dashboard = () => {
  return (
    <MainLayout className="dashboard">
      <Container>
        <div className="dashboard-content p-4 d-flex  justify-content-between">
          <h2 className="fw-bold">Dashboard</h2>
          <div className="noticeIcon">
            <MdNotifications size={30} />
          </div>
        </div>
        <div>
          <Row className="gap-5 mt-5">
            <Col className="p-5 dashColFirst col-5">
              <div className="d-flex justify-content-center gap-3 text-center align-items-center">
                <div>
                  <FaBook size={60} />
                </div>
                <div>
                  <h3>Total Books</h3>
                  <h3>20</h3>
                </div>
              </div>
            </Col>
            <Col className="p-5 dashColFirst bg-info col-5 ">
              <div className="d-flex justify-content-center gap-3 text-center align-items-center">
                <div>
                  <FaBookOpen size={60} />
                </div>
                <div>
                  <h3>Barrowed Books</h3>
                  <h3>100</h3>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <Row>
          <h1 className="fw-bold text-center mt-5  p-5">
            More info comming soon.....
          </h1>
        </Row>
      </Container>
    </MainLayout>
  );
};

export default Dashboard;
