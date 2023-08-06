import React from "react";
import { Row, Col } from "react-bootstrap";

import SideMenu from "../components/SideMenu";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Row>
        <Col sm={3} className="sidbarMenu">
          <SideMenu />
        </Col>
        <Col sm={9}>
          <div className="dashboard-content">Books</div>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
