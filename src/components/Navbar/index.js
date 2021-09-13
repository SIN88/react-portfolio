//import * as ReactBootStrap from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
// import  NavDropdown  from 'react-bootstrap/NavDropdown';
//import { Container, Navbar } from "react-bootstrap";
import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
 } from "react-router-dom";

const MyNav  =() => {
    
    return <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand >🤖</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <Link to="/About">  <Nav.Link href="/About">About</Nav.Link></Link>
      <Link to="/Contact"><Nav.Link href="/Contact">Contact</Nav.Link></Link>
      <Link to ="/Skills"><Nav.Link href="/Skills">Skills</Nav.Link></Link>
      <Link to ="/Projects"><Nav.Link href="/Projects">Projects</Nav.Link></Link>
      <Link to ="/Apps"><Nav.Link href="/Apps">Apps</Nav.Link></Link>
      
        {/* <NavDropdown.Item href="/Projects">Projects</NavDropdown.Item> */}
        {/* <NavDropdown.Item href="/Projects">Project2</NavDropdown.Item> */}
        {/* <NavDropdown.Item href="/Apps">Working App</NavDropdown.Item> */}
        
        
      {/* </NavDropdown> */}
    </Nav>
    <Nav>
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>


</>
}

export default MyNav;