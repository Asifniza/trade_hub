import React from "react";
import "./MainNav.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logos from "../../././../assets/images/logo.png";
import { Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import Dropdown from "react-bootstrap/Dropdown";
// import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
function MainNav() {
  const navigate = useNavigate();
  const redirectToUserHome = () => {
    navigate("/user/home");
  };
  const redirectToUserAddProduct = () => {
    navigate("/user/add-product");
  };
  return (
    <div>
      <div className="nav-page-color">
        <Navbar collapseOnSelect expand="lg" className="" id="navfixed">
          <div className="col-7">
            <Navbar.Brand onClick={redirectToUserHome} className="toggleimg">
              <img src={logos} className="logoimg ms-3" alt="img"></img>
              <span className="nav-page-trade">trade</span>{" "}
              <span className="nav-page-hub">hub</span>
            </Navbar.Brand>
          </div>
          <div className="col-5 ">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto w-100 d-flex justify-content-end pe-5 gap-5 align-items-center">
                <h6
                  className="nav-about"
                  onClick={redirectToUserHome}
                  style={{ cursor: "pointer" }}
                >
                  Home
                </h6> 

                <h6 className="nav-about">About</h6>

                <Dropdown className="me-5">
                  <Dropdown.Toggle id="nav-button" className="">
                    Login
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Link
                      className="dropdown-item"
                      to="/admin/login"
                      id="landing-drop-link"
                    >
                      Admin
                    </Link>
                    <Link
                      className="dropdown-item"
                      to="/moderator/login"
                      id="landing-drop-link"
                    >
                      Moderator
                    </Link>
                    <Link
                      className="dropdown-item"
                      to="/user/login"
                      id="landing-drop-link"
                    >
                      User
                    </Link>
                    <Link
                      className="dropdown-item"
                      to="/delivery/login"
                      id="landing-drop-link"
                    >
                      Delivery Agent
                    </Link>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
    </div>
  );
}

export default MainNav;
