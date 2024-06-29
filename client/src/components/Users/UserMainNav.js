import React, { useState } from "react";
import "./User.css";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logos from "../../assets/images/logo.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavDropdown from "react-bootstrap/NavDropdown";
import { IoMdContact } from "react-icons/io";
import { ImLoop } from "react-icons/im";
import { BsChatText } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function UserMainNav() {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleUserLogout = () => {
    console.log('work')
    navigate('/user/login')
  }
  return (
    <div>
      <div className="usermainnav-page-color">
        <Navbar collapseOnSelect expand="lg" className="d-flex justify-content-between pe-5" id="navfixed">
          <div className="col-2">
            <Navbar.Brand href="/" className="toggleimg">
              <img src={logos} className="usermainlogoimg ms-3" alt="img"></img>
              <span className="usermainnav-page-trade">trade</span>{" "}
              <span className="usermainnav-page-hub">hub</span>
            </Navbar.Brand>
          </div>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-5"
              aria-label="Search"
            />
          </Form> */}
          
          <Nav.Link href="" className="me-5 ">
            <p className="usermain-navbar-home mt-3 ">Home</p>
          </Nav.Link>
          <Nav.Link href="" className="me-5">
            <p className="usermain-navbar-home mt-3 ">About</p>
          </Nav.Link>
          {/* <Nav.Link href="" className='me-5'><p className='usermain-navbar-home mt-3 '>My Items</p></Nav.Link> */}
          {/* <Nav.Link href="" className="me-5">
            <p className="usermain-navbar-chat mt-3 pt-1">
              <BsChatText /> Chat
            </p>
          </Nav.Link> */}
          <Nav.Link href="" className="me-5">
            <p className="usermain-navbar-chat mt-3 pt-1">+Sell</p>
          </Nav.Link>
          <Nav.Link href="" className="me-5">
            <p className="usermain-navbar-chat mt-3 pt-1">Points</p>
          </Nav.Link>
          {/* <Nav.Link href="" className="me-5">
            <ImLoop className="usermain-navbar-iconloop" />
          </Nav.Link> */}
          <Dropdown show={showDropdown} onToggle={toggleDropdown}>
            <Dropdown.Toggle
              as="div"
              onClick={toggleDropdown}
              className="custom-dropdown-toggle"
            >
              <Nav.Link href="" className="me-5 ">
                <IoMdContact className="usermain-navbar-iconloop mt-3" />
              </Nav.Link>
            </Dropdown.Toggle>
            <Dropdown.Menu id="drop-down-basic">
              <Link className="dropdown-item" to="/user/user-profile" id="">
                View Profile
              </Link>
              <Link className="dropdown-item" to="" id="">
                Whishlist
              </Link>
              <Link className="dropdown-item" to="" id="">
                My Orders
              </Link>
              <h6 className="dropdown-item bg-danger text-light" to="" id="" onClick={handleUserLogout} >
                Logout
              </h6>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar>
      </div>
    </div>
  );
}

export default UserMainNav;