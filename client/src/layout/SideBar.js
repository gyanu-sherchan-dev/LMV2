import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { BiMenu, BiSolidDashboard } from "react-icons/bi";
import { FaBook, FaBookOpen, FaBookMedical, FaUserCheck } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="">
      <div className="p-3" variant="primary" onClick={handleShow}>
        <BiMenu size={30} />
      </div>

      <div className="icons  d-flex flex-column mt-5 p-3 gap-5 ">
        <Link to="/dashboard" className="nav-link">
          <BiSolidDashboard size={30} />
        </Link>
        <Link to="/allBooks" className="nav-link">
          <FaBook size={30} />
        </Link>
        <Link to="/myBooks" className="nav-link">
          <FaBookOpen size={30} />
        </Link>
        <Link to="/addBook" className="nav-link">
          <FaBookMedical size={30} />
        </Link>
        <Link to="/profile" className="nav-link">
          <FaUserCheck size={30} />
        </Link>
        <Link to="/setting" className="nav-link">
          <FiSettings size={30} />
        </Link>
      </div>

      {/* offcanvas will do later */}
      {/* <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas> */}
    </div>
  );
};

export default SideBar;
