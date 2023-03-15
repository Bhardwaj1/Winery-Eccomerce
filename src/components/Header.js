import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown, NavLink } from "react-bootstrap";
import "./style.css";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AboutUs from "./AboutUs";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import cart from "../assets/img/cart.png";
import { padding } from "@mui/system";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Navbar bg="warning " expand="lg" className="navigation-bar">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/aboutus"}>About Us</NavLink>
              <Nav.Link href="#link">Contact Us</Nav.Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
          <Badge
            badgeContent={4}
            color="primary"
            id="demo-positioned-button"
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <i className="fa-solid fa-cart-plus cartIcon"></i>
          </Badge>
        </Container>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ width: "24rem", padding: 10, position: "relative" }}
          >
            <i
              class="fa-solid fa-xmark"
              style={{
                position: "absolute",
                top: 2,
                right: 20,
                fontSize: 24,
                cursor: "pointer",
              }}
            ></i>
            <p style={{ fontSize: 20,padding:30 }}>Your Cart is empty</p>
            <img src={cart} style={{ height: 40 }} />
          </div>
        </Menu>
      </Navbar>
    </>
  );
};

export default Header;
