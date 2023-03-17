import React, { useState } from "react";
import {
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavDropdown,
  NavLink,
  Table,
} from "react-bootstrap";
import "./style.css";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AboutUs from "./AboutUs";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import cart from "../assets/img/cart.png";
import { padding } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "./Redux/action/action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Header = () => {
  const dispatch=useDispatch();
  const getData = useSelector((state) => state.cartReducer.carts);
  console.log(getData);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const notify =(name)=>{
    toast(` ${name} has been removed from cart`);
  }
  const del =(id,name)=>{
    dispatch(remove(id));
    notify(name);
  }
  
  

  return (
    <>
      <Navbar bg="warning " expand="lg" className="navigation-bar">
        <Container>
        <Link to={"/"} style={{textDecoration:"none"}}> <NavbarBrand>React-Bootstrap</NavbarBrand></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to={"/"} style={{textDecoration:"none"}} ><NavbarBrand to={"/"}>Home</NavbarBrand></Link>
              <Link to={"/aboutus"} style={{textDecoration:"none"}}> <NavbarBrand>About Us</NavbarBrand></Link>
              <Link to={"/contactUs"} style={{textDecoration:"none"}}> <NavbarBrand>Contact Us</NavbarBrand></Link>
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
            badgeContent={getData.length}
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
          {getData.length ? (
            <div
              className="card-details"
              style={{ width: "24rem", padding: 10 }}
            >
              <Table>
                <thead>
                  <tr>
                    <th>Photo</th>
                    <th>Wine</th>
                  </tr>
                </thead>
                <tbody>
                  {getData.map((e) => {
                    return (
                      <>
                        <tr>
                          <td>
                            <Link to={`/cart/${e.id}`}>
                            <img src={e.image} style={{width:"5rem",height:"5rem"}} onClick={handleClose}></img>
                            </Link>
                            
                          </td>
                          <td>
                            <p>{e.wine}</p>
                            <p>Quantity : 0</p>
                            <p><i class="fa-solid fa-trash" onClick={()=>{del(e.id ,e.wine)}} style={{cursor:"pointer", color:"red"}}></i></p>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          ) : (
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ width: "24rem", padding: 10, position: "relative" }}
            >
              <i
                class="fa-solid fa-xmark"
                onClick={handleClose}
                style={{
                  position: "absolute",
                  top: 2,
                  right: 20,
                  fontSize: 24,
                  cursor: "pointer",
                }}
              ></i>
              <p style={{ fontSize: 20, padding: 30 }}>Your Cart is empty</p>
              <img src={cart} style={{ height: 40 }} />
            </div>
          )}
        </Menu>
      </Navbar>
    </>
  );
};

export default Header;
