import {
    Navbar,
    Nav,
    Container,
    NavDropdown,
    Badge,
    Form,
    DropdownButton,
    Dropdown,
    Button,
    InputGroup,
  } from "react-bootstrap";
  import { LinkContainer } from "react-router-bootstrap";
  import { NavLink, Link } from "react-router-dom"
  import { useAuth } from "../../context/auth"
  import { useNavigate } from "react-router-dom";
  import { DingdingOutlined, UserOutlined, UserAddOutlined, ReadOutlined } from '@ant-design/icons';
  import { useEffect, useState } from "react";
  
  export default function Menu() {
    // hooks
    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();
  
    const logout = () => {
      setAuth({ ...auth, token: null, user: null });
      localStorage.removeItem("auth");
      navigate("/login");
    }
  
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <LinkContainer to="/">
            <Navbar.Brand href="/" className="text-decoration-none">Tresure-Hunt</Navbar.Brand>
            {/* <Navbar.Brand href="/"> <img  src={require('./moretobuy.png')} alt="logo" border="0" width="120px" height="40px" /></Navbar.Brand> */}
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            {!auth?.user ? <Nav
              className="me-auto  nav-item "
            >
  
              <LinkContainer to="/about"><Nav.Link className="text-decoration-none" >About</Nav.Link></LinkContainer>
  
  
            </Nav> : <Nav className="me-auto nav-item ">
              <LinkContainer to="/about"><Nav.Link className="text-decoration-none">About</Nav.Link></LinkContainer>
              <LinkContainer to={`/dashboard`}><Nav.Link className="text-decoration-none"> {"Dashboard"} </Nav.Link></LinkContainer>
              <LinkContainer to={`/score/${auth?.user?.role === 1 ? "admin" : "user"}`}><Nav.Link className="text-decoration-none"> {auth?.user?.role === 1 ? "Leaderboard" : "Your Status"} </Nav.Link></LinkContainer>
            </Nav>}
  
            {!auth?.user ? (
              <>
                  <LinkContainer to="/login">
                    <Nav.Link className="text-light  mx-3 text-decoration-none">Login</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/register">
                    <Nav.Link className="text-light text-decoration-none">Register</Nav.Link>
                  </LinkContainer>
              </>
  
  
            ) : (
              <NavDropdown title={`${auth?.user?.username?.toUpperCase()}`} id="collasible-nav-dropdown" className="text-light dropdown mx-5">
                <NavDropdown.Item onClick={logout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            )}
  
  
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  
  }